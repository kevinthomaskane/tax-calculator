<template>
  <div class="tax-calculator-wrapper">
    <heading />
    <user-inputs />
    <results />
  </div>
</template>
<script>
import Heading from './Heading'
import UserInputs from './UserInputs'
import Results from './Results'

export default {
  name: 'TaxCalculator',
  components: {
    'heading': Heading,
    'user-inputs': UserInputs,
    'results': Results 
  }
}
</script>
<style lang="scss">
@import './../variables.scss';

.tax-calculator-wrapper {
  padding: 6rem 3rem 3rem;
}
</style>
