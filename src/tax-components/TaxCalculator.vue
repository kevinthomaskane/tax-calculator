<template>
  <div class="tax-calculator-wrapper">
    <heading />
    <user-inputs />
  </div>
</template>
<script>
import Heading from './Heading'
import UserInputs from './UserInputs'
export default {
  name: 'TaxCalculator',
  components: {
    'heading': Heading,
    'user-inputs': UserInputs
  }
}
</script>
<style lang="scss">
@import './../variables.scss';

.tax-calculator-wrapper {
  padding: 6rem 3rem 3rem;
}
</style>
