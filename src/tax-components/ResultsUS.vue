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
            <p>{{ salary === -1 ? '-' : salary }}</p>
          </div>
          <div class="wrapper">
            <p>Federal Income Tax</p>
            <p>{{ federalIncomeTax === -1 ? '-' : federalIncomeTax }}</p>
          </div>
          <div class="wrapper">
            <p>Medicare Tax</p>
            <p>{{ medicareTax === -1 ? '-' : medicareTax }}</p>
          </div>
          <div class="wrapper">
            <p>Social Security Tax</p>
            <p>{{ socialSecurityTax === -1 ? '-' : socialSecurityTax }}</p>
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
         FEDERAL_STANDARD_DEDUCTIONS } from './../constants/tax-calculator/constants'

export default {
  name: 'ResultsUS',
  data: () => ({
    PAY_BASIS_OPTIONS,
    FEDERAL_STANDARD_DEDUCTIONS,
    FEDERAL_TAX_BRACKETS,
    salary: -1, /* converted after pay basis considerations */
    federalIncomeTax: -1, /* converted after pay basis considerations */
    federalStandardDeduction: -1, /* converted after pay basis considerations */
    medicareTax: -1, /* converted after pay basis considerations */
    socialSecurityTax: -1, /* converted after pay basis considerations */
    yearlyTotalSocialSecurityTax: -1,
    yearlyTotalMedicareTax: -1,
    yearlyFedDeduction: -1,
    yearlyTotalFederalIncomeTax: -1
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
    calculateYearlyTotalFederalIncomeTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome'] - this.yearlyFedDeduction
      let incomeAlreadyTaxed = 0
      let total = 0

      for (const tier in this.FEDERAL_TAX_BRACKETS) {
        
        let tierMin = this.FEDERAL_TAX_BRACKETS[tier][this.userTaxInfo['filingStatus']].min
        let tierMax = this.FEDERAL_TAX_BRACKETS[tier][this.userTaxInfo['filingStatus']].max
        let rate = this.FEDERAL_TAX_BRACKETS[tier].rate

        if (taxableAmount >= tierMax) {
          const incomeChunk = tierMax
          total += incomeChunk * rate
          incomeAlreadyTaxed += incomeChunk
        }

        if (taxableAmount >= tierMin && taxableAmount <= tierMax) {
          total += (taxableAmount - incomeAlreadyTaxed + 1) * rate
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
    calculateYearlyTotalMedicareTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome']

      if (taxableAmount <= 200000) {
        return taxableAmount * .0145
      }

      return (200000 * .0145) + ((taxableAmount - 200000) * .0235)
    },
    /**
     * Since social security tax is capped at 128400, checks whether taxable income is above or below the cap and applies standard rate
     * @return {number} - yearly total ss tax
     */
    calculateYearlyTotalSocialSecurityTax () {
      let taxableAmount = this.userTaxInfo['taxYearlyGrossIncome']

      if (taxableAmount <= 132900) {
        return taxableAmount * .062
      }

      return 132900 * .062
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
          this[field] = Math.round(amount)
          break
        case 'Monthly':
          this[field] = Math.round(amount / 12)
          break
        case 'Biweekly':
          this[field] = Math.round(amount / 26)
          break
        case 'Weekly':
          this[field] = Math.round(amount / 52)
          break
        case 'Daily':
          this[field] = Math.round(amount / 52 / 5)
          break
        case 'Hourly':
          this[field] = Math.round(amount / 52 / 5 / 8)
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
        this.calculatePayBasisValue(this.userTaxInfo['taxYearlyGrossIncome'], 'salary')
        this.calculatePayBasisValue(this.userTaxInfo['yearlyFedDeduction'], 'federalStandardDeduction')
        this.calculatePayBasisValue(this.userTaxInfo['yearlyTotalFederalIncomeTax'], 'federalIncomeTax')
      }
    },
    userTaxInfo () {
      // calculate salary based on yearly gross income
      this.calculatePayBasisValue(this.userTaxInfo['taxYearlyGrossIncome'], 'salary')

      // get the federal yearly standard deduction
      this.yearlyFedDeduction = this.FEDERAL_STANDARD_DEDUCTIONS[this.userTaxInfo['filingStatus']]
      this.calculatePayBasisValue(this.yearlyFedDeduction, 'federalStandardDeduction')

      // get yearly federal income tax
      this.yearlyTotalFederalIncomeTax = this.calculateYearlyTotalFederalIncomeTax()
      this.calculatePayBasisValue(this.yearlyTotalFederalIncomeTax, 'federalIncomeTax')

      // get medicare tax
      this.yearlyTotalMedicareTax = this.calculateYearlyTotalMedicareTax()
      this.calculatePayBasisValue(this.yearlyTotalMedicareTax, 'medicareTax')

      // get social security tax
      this.yearlyTotalSocialSecurityTax = this.calculateYearlyTotalSocialSecurityTax()
      this.calculatePayBasisValue(this.yearlyTotalSocialSecurityTax, 'socialSecurityTax')
    }
    /* taxPayBasis () { */
    /* this.calculatePayBasisValue(this.taxYearlyGrossIncome, 'salary') */
    /* this.calculatePayBasisValue(this.yearlyFedDeduction, 'federalStandardDeduction') */
    /* this.calculatePayBasisValue(this.yearlyTotalFederalIncomeTax, 'federalIncomeTax') */
    /* } */
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
        }
        .bold {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
