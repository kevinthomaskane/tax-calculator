/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'US', /* either US or UK for pocketpence */
    calculatorType: 'tax', /* type of calculator to display */
    taxYearlyGrossIncome: 50000, /* user-inputed gross income for tax calculator */
    taxPayBasis: 'Yearly', /* user-inputed pay basiss for tax calculator */
    filingStatus: 'S', /* user-inputed filing status S, MFJ, MFS, HOH */
    stateOfResidence: 'Alabama' /* user-inputed state of residence */
  },
  getters: {
    calculatorType: state => state.calculatorType,
    taxYearlyGrossIncome: state => state.taxYearlyGrossIncome,
    taxPayBasis: state => state.taxPayBasis,
    country: state => state.country,
    filingStatus: state => state.filingStatus,
    stateOfResidence: state => state.stateOfResidence
  },
  mutations: {
    setCalculatorType (state, type) {
      state.calculatorType = type
    },
    setTaxYearlyGrossIncome (state, income) {
      state.taxYearlyGrossIncome = income  
    },
    setTaxPayBasis (state, basis) {
      state.taxPayBasis = basis  
    },
    setFilingStatus (state, status) {
      state.filingStatus = status  
    },
    setStateOfResidence (state, residence) {
      state.stateOfResidence = residence  
    }
  },
  actions: {
    setCalculatorType ({commit}, payload) {commit('setCalculatorType', payload)},
    setTaxYearlyGrossIncome ({commit}, payload) {commit('setTaxYearlyGrossIncome', payload)},
    setTaxPayBasis ({commit}, payload) {commit('setTaxPayBasis', payload)},
    setFilingStatus ({commit}, payload) {commit('setFilingStatus', payload)},
    setStateOfResidence ({commit}, payload) {commit('setStateOfResidence', payload)},
  }
})
