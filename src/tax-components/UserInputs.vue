<template>
  <div class="user-inputs-wrapper">
    <user-inputs-US v-if="country === 'US'" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import UserInputsUS from './UserInputsUS'

export default {
  name: 'UserInputs',
  components: {
    'user-inputs-US': UserInputsUS
  },
  computed: {
    ...mapGetters([
      'country'
    ])
  }
}
</script>

<style lang="scss">
@import './../variables.scss';

.user-inputs-wrapper {

}
</style>
