<template>
  <div class="results-wrapper">
    <div class="container">
      <div class="heading-options-wrapper">
        <p class="heading-title">Deductions</p>
        <div class="options">
          <p
            :class="['option', {active: taxPayBasis === option.toLowerCase()}]"
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
          <div class="salary wrapper">
            <p>Salary</p>
            <p>{{ currencySymbol + taxGrossIncome }}</p>
          </div>
          <div class="income-tax wrapper">
            <p>Salary</p>
            <p>{{ currencySymbol + taxGrossIncome }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { PAY_BASIS_OPTIONS } from './../constants/tax-calculator/constants'

export default {
  name: 'Results',
  data: () => ({
    PAY_BASIS_OPTIONS,
    currencySymbol: ''
  }),
  methods: {
    /**
     * Handles pay basis selection from headings options and sets it to store
     * @param {string} option - the pay basis option
     */
    handlePayBasisSelection (option) {
      this.$store.dispatch('setTaxPayBasis', option.toLowerCase())
    }
  },
  computed: {
    ...mapGetters([
      'country',
      'taxGrossIncome',
      'taxPayBasis'
    ])
  },
  watch: {
    country (val) {
      if (val !== 'US') {
        this.currencySymbol = '£'
        return
      }
      this.currencySymbol = '$'
    }
  },
}
</script>
<style lang="scss">
@import './../variables.scss';

.results-wrapper {
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
  }
}
</style>
