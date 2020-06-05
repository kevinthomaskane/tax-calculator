<template>
  <div class="results-wrapper">
    <results-US v-if="country === 'US'" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ResultsUS from './ResultsUS'

export default {
  name: 'Results',
  components: {
    'results-US': ResultsUS 
  },
  computed: {
    ...mapGetters([
      'country',
    ])
  }
}
</script>
<style lang="scss">
@import './../variables.scss';

.results-wrapper {
}
</style>
