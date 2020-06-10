<template>
  <div class="user-inputs-US-wrapper">
    <div class="container">
      <p class="instructions">Start by inserting your gross income, pay basis, filing status, and your state of residence</p>
      <div class="inputs-wrapper">
        <div class="gross-income-wrapper">
          <label for="gross-income-input">Gross Income</label>
          <input
            name="gross income"
            id="gross-income-input"
            @input="handleGrossIncomeInput"
            type="number"
            :value="income"
          />
        </div>
        <div class="basis-selection-wrapper">
          <label for="pay-basis-select">Pay Basis</label>
          <select id="pay-basis-select" name="pay basis" v-model="payBasis" @change="handlePayBasis">
            <option
              v-for="(option, index) of PAY_BASIS_OPTIONS"
              :key="index" 
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div class="filing-status-selection-wrapper">
          <label for="filing-status-select">Filing Status</label>
          <select id="filing-status-select" name="filing status" v-model="filingStatus" @change="handleFilingStatus">
            <option
              v-for="(status, index) of Object.keys(FILING_ACRONYMS)"
              :key="index" 
              :value="status"
            >
              {{ FILING_ACRONYMS[status] }}
            </option>
          </select>
        </div>
        <div class="state-selection-wrapper">
          <label for="state-select">State of Residence</label>
          <select id="state-select" name="state" v-model="stateOfResidence" @change="handleStateSelection">
            <option
              v-for="(state, index) of STATES"
              :key="index" 
              :value="state"
            >
              {{ state }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="calculate-button"
        @click="handleCalculate"
      >
        Calculate
      </div>
    </div> 
  </div>
</template>
<script>
import { PAY_BASIS_OPTIONS, FILING_ACRONYMS, STATES } from './../constants/tax-calculator/constants'

export default {
  name: 'UserInputsUS',
  data: () => ({
    PAY_BASIS_OPTIONS,
    FILING_ACRONYMS,
    STATES,
    income: 50000, /* user may input non-digits, so store as string to allow for sanitizing regex */
    payBasis: 'Yearly',
    filingStatus: 'S',
    stateOfResidence: 'Alabama'
  }),
  methods: {
    /**
     * Handles gross income input
     */
    handleGrossIncomeInput (e) {
      this.income = e.target.value
    },
    /**
     * Handles pay basis selection
     */
    handlePayBasis (e) {
      this.payBasis = e.target.value
    },
    /**
     * Handles filing status selection
     */
    handleFilingStatus (e) {
      this.filingStatus = e.target.value
    },
    /**
     * Handles filing status selection
     */
    handleStateSelection (e) {
      this.stateOfResidence = e.target.value
    },
    /**
     * Calculates yearly income, payBasis, filingStatus, and stateOfResidence and sets to store
     */
    handleCalculate () {
      const yearlyIncome = this.returnYearlyIncome(parseFloat(this.income), this.payBasis)

      this.$store.dispatch('setUserTaxInfo', {
        taxPayBasis: this.payBasis,
        taxYearlyGrossIncome: yearlyIncome,
        filingStatus: this.filingStatus,
        stateOfResidence: this.stateOfResidence
      })
    },
    /**
     * returns the yearly income based on the selected pay basis
     * @param {number} income - user-inputed income
     * @param {string} basis - user-inputed pay basis
     * @return {number} yearly income
     */
    returnYearlyIncome (income, basis) {
      switch (basis) {
        case 'Yearly':
          return income
        case 'Monthly':
          return income * 12
        case 'Biweekly':
          return income * 26
        case 'Weekly':
          return income * 52
        case 'Daily':
          return income * 5 * 52
        case 'Hourly':
          return income * 8 * 5 * 52
      }
    }
  }
}
</script>

<style lang="scss">
@import './../variables.scss';

.user-inputs-US-wrapper {
  margin-bottom: 2rem;
  .container {
    background: white;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    display: inline-block;
    .instructions {
      color: $color-grey;
      margin-bottom: 1.5rem;
    }
    .inputs-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      label {
        margin-bottom: .25rem;
        color: black;
        font-weight: bold;
        display: block;
      }
      select {
        height: 2.5rem;
        border: none;
        outline: none;
        background: $color-light-grey;
        padding: .5rem;
        color: $color-dark-grey;
        border-radius: 4px;
      }
      input {
        border-radius: 4px;
        border: none;
        outline: none;
        color: $color-dark-grey;
        background: $color-light-grey;
        padding: .5rem;
        width: 100%;
        height: 2.5rem;
      }
      .gross-income-wrapper {
        margin-right: 2rem;
        width: 250px;
      }
      .basis-selection-wrapper {
        margin-right: 2rem;
      }
      .filing-status-selection-wrapper {
        margin-right: 2rem;
      }
    }
    .calculate-button {
      padding: .5rem 1rem;
      display: inline-block;
      background: $color-dark-blue;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      transition: background .2s ease-in-out;
      &:hover {
        background: $color-darker-blue;
      }
    }
  }
}

</style>
