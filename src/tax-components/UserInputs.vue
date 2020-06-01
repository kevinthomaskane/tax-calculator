<template>
  <div class="user-inputs-wrapper">
    <div class="container">
      <p class="instructions">Start by inserting your gross income, your pay basis, and your country</p>
      <div class="inputs-wrapper">
        <div class="gross-income-wrapper">
          <label for="gross-income-input">Gross Income</label>
          <input
            name="gross income"
            id="gross-income-input"
            @input="handleGrossIncomeInput"
            type="text"
            :placeholder="taxGrossIncome === -1 ? 50000 : ''"
            :value="taxGrossIncome === -1 ? '' : taxGrossIncome"
          />
        </div>
        <div class="basis-selection-wrapper">
          <label for="pay-basis-select">Pay Basis</label>
          <select id="pay-basis-select" name="pay basis" @change="handlePayBasis">
            <option
              v-for="(option, index) of PAY_BASIS_OPTIONS"
              :key="index" 
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="calculate-button">Calculate</div>
    </div> 
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { PAY_BASIS_OPTIONS } from './../constants/tax-calculator/constants'

export default {
  name: 'UserInputs',
  data: () => ({
    PAY_BASIS_OPTIONS
  }),
  methods: {
    handleGrossIncomeInput (e) {
      this.$store.dispatch('setTaxGrossIncome', parseInt(e.target.value))
    },
    handlePayBasis (e) {
      this.$store.dispatch('setTaxPayBasis', e.target.value.toLowerCase())
    }
  },
  computed: {
    ...mapGetters([
      'taxGrossIncome'
    ])
  }
}
</script>

<style lang="scss">
@import './../variables.scss';

.user-inputs-wrapper {
  .container {
    background: white;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    display: inline-block;
    .instructions {
      color: $color-grey;
      margin-bottom: 2rem;
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
        height: 2rem;
        border: none;
        outline: none;
        background: $color-light-grey;
        padding: .5rem;
        color: $color-dark-grey;
      }
      input {
        border-radius: 4px;
        border: none;
        outline: none;
        background: $color-light-grey;
        padding: .5rem;
        color: black;
        width: 100%;
        height: 2rem;
      }
      .gross-income-wrapper {
        margin-right: 2rem;
        width: 250px;
      }
    }
    .calculate-button {
      padding: .5rem 1rem;
      display: inline-block;
      background: $color-dark-blue;
      border-radius: 4px;
      color: white;
    }
  }
}

</style>
