<template>
  <div class="results-US-wrapper">
    <div class="container">
      <div class="heading-options-wrapper">
        <p class="heading-title">Deductions</p>
        <div class="options">
          <p
            :class="['option', {active: taxPayBasis === option}]"
            v-for="(option, index) of PAY_BASIS_OPTIONS"
            :key="index"
            @click="handlePayBasisSelection(option)"
          >
           {{ option }} 
          </p>
        </div>
      </div>
      <div class="breakdown-wrapper">
        <div class="income-breakdown">
          <div class="bold wrapper">
            <p>Salary</p>
            <p>{{ salary }}</p>
          </div>
          <div class="wrapper">
            <p>Federal Income Tax</p>
            <p>{{ totalFederalIncomeTax }}</p>
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
    salary: -1,
    federalStandardDeduction: -1,
    yearlyFedDeduction: -1,
    federalIncomeTaxRate: -1,
    totalFederalIncomeTax: -1
  }),
  mounted() {
    this.calculateRelevantValue(this.taxYearlyGrossIncome, 'salary')

    this.yearlyFedDeduction = this.FEDERAL_STANDARD_DEDUCTIONS[this.filingStatus]
    this.calculateRelevantValue(this.yearlyFedDeduction, 'federalStandardDeduction')

    this.returnFederalIncomeTaxRate()
    this.calculateTotalFederalIncomeTax()
  },
  methods: {
    /**
     * Handles pay basis selection from headings options and sets it to store
     * @param {string} option - the pay basis option
     */
    handlePayBasisSelection (option) {
      this.$store.dispatch('setTaxPayBasis', option)
    },
    /**
     * Loops through federal tax brackets and finds relevant tax rate
     */
    returnFederalIncomeTaxRate () {
      for (const tier in this.FEDERAL_TAX_BRACKETS) {
        if (this.taxYearlyGrossIncome >= this.FEDERAL_TAX_BRACKETS[tier][this.filingStatus].min &&
            this.taxYearlyGrossIncome <= this.FEDERAL_TAX_BRACKETS[tier][this.filingStatus].max) {
          this.federalIncomeTaxRate = this.FEDERAL_TAX_BRACKETS[tier].rate
        }
      }
    },
    calculateTotalFederalIncomeTax () {
      console.log(this.salary, this.federalStandardDeduction, this.federalIncomeTaxRate)
      this.totalFederalIncomeTax = (this.salary - this.federalStandardDeduction) * this.federalIncomeTaxRate
    },
    /**
     * Converts the amount into the relevant value based on pay-basis
     * @param {number} amount - the value to convert
     * @param {string} field - the field in 'data' to update
     */
    calculateRelevantValue (amount, field) {
      switch (this.taxPayBasis) {
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
      'taxYearlyGrossIncome',
      'taxPayBasis',
      'filingStatus'
    ])
  },
  watch: {
    taxPayBasis () {
      this.calculateRelevantValue(this.taxYearlyGrossIncome, 'salary')
      this.calculateRelevantValue(this.yearlyFedDeduction, 'federalStandardDeduction')
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
        }
        .bold {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
