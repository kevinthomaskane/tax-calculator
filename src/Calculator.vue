<template>
  <div class="calculator-page-wrapper">
    <clipped-path-background />
    <tax-calculator v-if="calculatorType === 'tax'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClippedPathBackground from './visual-components/ClippedPathBackground'
import TaxCalculator from './tax-components/TaxCalculator'

export default {
  name: 'Calculator',
  components: {
    'clipped-path-background': ClippedPathBackground,
    'tax-calculator': TaxCalculator
  },
  computed: {
    ...mapGetters([
      'calculatorType'
    ])
  }
}
</script>

<style lang="scss">
@import './variables.scss';

body, body * {
  font-size: 1rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $primary-font;
}
.calculator-page-wrapper {
  width: calc(100% - 300px);
  position: relative;
}
</style>
