/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'US', /* either US or UK for pocketpence */
    calculatorType: 'tax', /* type of calculator to display */
    taxGrossIncome: -1, /* user-inputed gross income for tax calculator */
    taxPayBasis: '' /* user-inputed pay basiss for tax calculator */
  },
  getters: {
    calculatorType: state => state.calculatorType,
    taxGrossIncome: state => state.taxGrossIncome,
    taxPayBasis: state => state.taxPayBasis
    // currentView: state => state.currentView,
  },
  mutations: {
    setCalculatorType (state, type) {
      state.calculatorType = type
    },
    setTaxGrossIncome (state, income) {
      state.taxGrossIncome = income  
    },
    setTaxPayBasis (state, basis) {
      state.taxPayBasis = basis  
    }
    // setCurrentView (state, view) {
    //   state.currentView = view
    // },
  },
  actions: {
    setCalculatorType ({commit}, payload) {commit('setCalculatorType', payload)},
    setTaxGrossIncome ({commit}, payload) {commit('setTaxGrossIncome', payload)},
    setTaxPayBasis ({commit}, payload) {commit('setTaxPayBasis', payload)},
    // setCurrentView ({commit}, payload) {commit('setCurrentView', payload)},
  }
})
