<template>
  <div class="tax-heading-wrapper">
    <h1 class="header">Income Tax Calculator</h1>
    <p class="sub-header">Calculate your final income after taxes</p>
  </div>
</template>
<script>
export default {
  name: 'Heading'
}
</script>
<style lang="scss">
@import './../variables.scss';

.tax-heading-wrapper {
  color: white;
  text-shadow: 0 1px 1px black;
  margin-bottom: 3rem;
  .header {
    font-size: 3rem;
  }
  .sub-header {
    font-size: 1.5rem;
  }
}
</style>
