<template>
  <div class="results-US-wrapper">
    <div class="container">
      <div class="heading-options-wrapper">
        <p class="heading-title">Deductions</p>
        <div class="options">
          <p
            :class="['option', {active: newPayBasis === option || (newPayBasis === '' && userTaxInfo['taxPayBasis'] === option)}]"
            v-for="(option, index) of PAY_BASIS_OPTIONS"
            :key="index"
            @click="handleNewPayBasisSelection(option)"
          >
           {{ option }} 
          </p>
        </div>
      </div>
      <div class="breakdown-wrapper">
        <div class="income-breakdown">
          <div class="bold wrapper">
            <p>Salary</p>
            <p>{{ salary === -1 ? '-' : (salary).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="wrapper">
            <p>Federal Income Tax</p>
            <p>{{ federalIncomeTax === -1 ? '-' : (federalIncomeTax).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="wrapper">
            <p>State Income Tax</p>
            <p>{{ stateIncomeTax === -1 ? '-' : (stateIncomeTax).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="wrapper">
            <p>Medicare Tax</p>
            <p>{{ medicareTax === -1 ? '-' : (medicareTax).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="wrapper border-bottom">
            <p>Social Security Tax</p>
            <p>{{ socialSecurityTax === -1 ? '-' : (socialSecurityTax).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="bold wrapper">
            <p>Total Tax</p>
            <p>{{ totalTax === -1 ? '-' : (totalTax).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
          <div class="bold large wrapper">
            <p>Net Income</p>
            <p>{{ netIncome === -1 ? '-' : (netIncome).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { PAY_BASIS_OPTIONS,
         FEDERAL_TAX_BRACKETS,
         STATE_STANDARD_DEDUCTIONS,
         STATE_TAX_BRACKETS,
         FEDERAL_STANDARD_DEDUCTIONS } from './../constants/tax-calculator/constants'

export default {
  name: 'ResultsUS',
  data: () => ({
    PAY_BASIS_OPTIONS,
    FEDERAL_STANDARD_DEDUCTIONS,
    FEDERAL_TAX_BRACKETS,
    STATE_TAX_BRACKETS,
    STATE_STANDARD_DEDUCTIONS,
    salary: -1, /* converted after pay basis considerations */
    federalIncomeTax: -1, /* converted after pay basis considerations */
    federalStandardDeduction: -1, /* converted after pay basis considerations */
    medicareTax: -1, /* converted after pay basis considerations */
    socialSecurityTax: -1, /* converted after pay basis considerations */
    stateStandardDeduction: -1, /* converted after pay basis considerations */
    stateIncomeTax: -1, /* converted after pay basis considerations */
    totalTax: -1,
    netIncome: -1,
    yearlySocialSecurityTax: -1,
    yearlyMedicareTax: -1,
    yearlyFederalStandardDeduction: -1,
    yearlyFederalIncomeTax: -1,
    yearlyStateIncomeTax: -1,
    yearlyStateStandardDeduction: -1
  }),
  methods: {
    /**
     * Handles pay basis selection from headings options and sets it to store
     * @param {string} option - the pay basis option
     */
    handleNewPayBasisSelection (option) {
      this.$store.dispatch('setNewPayBasis', option)
    },
    /**
     * Loops through federal tax brackets and finds relevant tax rate
     * @return {number} - returns yearly total federal income tax
     */
    calculateYearlyFederalIncomeTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome'] - this.FEDERAL_STANDARD_DEDUCTIONS[this.userTaxInfo['filingStatus']]

      let total = 0

      for (const tier in this.FEDERAL_TAX_BRACKETS) {
        
        let tierMin = this.FEDERAL_TAX_BRACKETS[tier][this.userTaxInfo['filingStatus']].min
        let tierMax = this.FEDERAL_TAX_BRACKETS[tier][this.userTaxInfo['filingStatus']].max
        let rate = this.FEDERAL_TAX_BRACKETS[tier].rate

        if (taxableAmount >= tierMax) {
          const incomeChunk = tierMax - tierMin + 1
          total += incomeChunk * rate
          continue
        }

        if (taxableAmount >= tierMin && taxableAmount <= tierMax) {
          total += (taxableAmount - tierMin + 1) * rate
          continue
        }

        if (taxableAmount < tierMin) {
          break
        }
      }

      return total
    },
    calculateYearlyStateIncomeTax () {
      const taxableAmount = this.userTaxInfo['taxYearlyGrossIncome'] - this.STATE_STANDARD_DEDUCTIONS[this.userTaxInfo['stateOfResidence']][this.userTaxInfo['filingStatus']]

      let total = 0

      const tiers = STATE_TAX_BRACKETS[this.userTaxInfo['stateOfResidence']]  

      // states with a set income tax or no tax will just have the rate as a number
      if (typeof tiers.rate === 'number') {
        return taxableAmount * tiers.rate
      }

      for (const tier in tiers) {
        
        // some states don't have all filing statuses, defaults to Single
        const filingStatus = tiers[tier][this.userTaxInfo['filingStatus']] || tiers[tier]['S']

        const tierMin = filingStatus.min
        const tierMax = filingStatus.max
        const rate = tiers[tier].rate

        if (taxableAmount >= tierMax) {
          const incomeChunk = tierMax - tierMin + 1
          total += incomeChunk * rate
          continue
        }

        if (taxableAmount >= tierMin && taxableAmount <= tierMax) {
          total += (taxableAmount - tierMin + 1) * rate
          continue
        }

        if (taxableAmount < tierMin) {
          break
        }
      }

      return total
    },
    /**
     * Medicare has 2 tax tiers, first one stops at 200000
     * @return {number} - yearly total medicare tax
     */
    calculateYearlyMedicareTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome']

      if (taxableAmount <= 200000) {
        return taxableAmount * .0145
      }

      return (200000 * .0145) + ((taxableAmount - 200000) * .0235)
    },
    /**
     * Since social security tax is capped at 132900, checks whether taxable income is above or below the cap and applies standard rate
     * @return {number} - yearly total ss tax
     */
    calculateYearlySocialSecurityTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome']

      if (taxableAmount <= 132900) {
        return taxableAmount * .062
      }

      return 132900 * .062
    },
    calculateTotalTax () {
      return this.federalIncomeTax + this.stateIncomeTax + this.medicareTax + this.socialSecurityTax
    },
    calculateIncomeBreakdownValues () {
      // calculate salary based on yearly gross income
      this.calculatePayBasisValue(this.userTaxInfo['taxYearlyGrossIncome'], 'salary')

      // get yearly federal income tax
      this.calculatePayBasisValue(this.calculateYearlyFederalIncomeTax(), 'federalIncomeTax')

      // get medicare tax
      this.calculatePayBasisValue(this.calculateYearlyMedicareTax(), 'medicareTax')

      // get social security tax
      this.calculatePayBasisValue(this.calculateYearlySocialSecurityTax(), 'socialSecurityTax')

      // get state income tax
      this.calculatePayBasisValue(this.calculateYearlyStateIncomeTax(), 'stateIncomeTax')

      // get total tax
      this.totalTax = this.calculateTotalTax()

      // get net income
      this.netIncome = this.salary - this.totalTax
    },
    /**
     * Converts the amount into the relevant value based on pay-basis
     * @param {number} amount - the value to convert
     * @param {string} field - the field in 'data' to update
     */
    calculatePayBasisValue (amount, field) {
      const currentBasis = this.newPayBasis || this.userTaxInfo['taxPayBasis']

      switch (currentBasis) {
        case 'Yearly':
          this[field] = amount
          break
        case 'Monthly':
          this[field] = amount / 12
          break
        case 'Biweekly':
          this[field] = amount / 26
          break
        case 'Weekly':
          this[field] = amount / 52
          break
        case 'Daily':
          this[field] = amount / 52 / 5 
          break
        case 'Hourly':
          this[field] = amount / 52 / 5 / 8
          break
      }
    }
  },
  computed: {
    ...mapGetters([
      'userTaxInfo',
      'newPayBasis'
    ])
  },
  watch: {
    newPayBasis () {
      // make sure that the user has already submitted info to the store
      if (this.userTaxInfo.taxYearlyGrossIncome) {
        this.calculateIncomeBreakdownValues()
      }
    },
    userTaxInfo () {
      this.calculateIncomeBreakdownValues()
    }
  }
}
</script>
<style lang="scss">
@import './../variables.scss';

.results-US-wrapper {
  .container {
    background: white;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    display: inline-block;
    .heading-options-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      color: $color-dark-grey;
      .heading-title {
        font-size: 1.5rem;
        margin-right: 3rem;
      }
    }
    .options {
      display: flex;
      align-items: center;
      .option {
        font-size: .9rem;
        margin-right: 1.5rem;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          background: $color-light-grey;
          padding: .25rem .5rem;
          border-radius: 4px;
        }
      }
    }
    .breakdown-wrapper {
      .income-breakdown {
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: .5rem;
        }
        .bold {
          font-weight: bold;
        }
        .border-bottom {
          padding-bottom: 1rem;
          border-bottom: solid 1px rgba(0,0,0,.1);
          margin-bottom: 1rem;
        }
        .large {
          p {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
}
</style>
