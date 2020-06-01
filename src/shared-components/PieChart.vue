<template>
  <div class="pie-chart-wrapper">
    <svg height="20" width="20" viewBox="0 0 20 20">
      <circle r="10" cx="10" cy="10" fill="white" />
      <circle r="5" cx="10" cy="10" fill="bisque"
              stroke="tomato"
              stroke-width="10"
              stroke-dasharray="calc(35 * 31.42 / 100) 31.42" />
    </svg>  
  </div>
</template>
<script>
export default {
  name: 'PieChart'
}
</script>
<style lang="scss">
.pie-chart-wrapper {
  
}
</style>
