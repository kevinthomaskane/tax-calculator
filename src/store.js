/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'US', /* either US or UK for pocketpence */
    calculatorType: 'tax', /* type of calculator to display */
    userTaxInfo: {
      taxYearlyGrossIncome: -1, /* user-inputed gross income for tax calculator */
      taxPayBasis: '', /* user-inputed pay basiss for tax calculator */
      filingStatus: '', /* user-inputed filing status S, MFJ, MFS, HOH */
      stateOfResidence: '' /* user-inputed state of residence */
    },
    newPayBasis: '' /* user-selected from results section of calculator */
  },
  getters: {
    calculatorType: state => state.calculatorType,
    userTaxInfo: state => state.userTaxInfo,
    country: state => state.country,
    newPayBasis: state => state.newPayBasis
  },
  mutations: {
    setCalculatorType (state, type) {
      state.calculatorType = type
    },
    setUserTaxInfo (state, info) {
      state.userTaxInfo = info
    },
    setNewPayBasis (state, basis) {
      state.newPayBasis = basis
    }
  },
  actions: {
    setCalculatorType ({commit}, payload) {commit('setCalculatorType', payload)},
    setUserTaxInfo({commit}, payload) {commit('setUserTaxInfo', payload)},
    setNewPayBasis({commit}, payload) {commit('setNewPayBasis', payload)},
  }
})
