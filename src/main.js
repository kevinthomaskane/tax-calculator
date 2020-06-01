import Vue from 'vue'
import store from './store'
import Calculator from './Calculator.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Calculator),
}).$mount('#app')
