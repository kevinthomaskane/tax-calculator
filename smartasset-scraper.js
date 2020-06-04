const fs = require('fs');
const Path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');
const states = require('./states');
const STATE_TAX_BRACKETS = {}

class Scraper {
  constructor () {
    this.states = states
    this.currentState = ''
    this.filingCategories = ['S', 'MFJ', 'MFS', 'HOH']
    this.stateBrackets = {}
    this.currentIndex = 0
    this.tableParentSelector = "div[id^='tab-state-income-tax-brackets'] tbody"
    this.tableParentSelectorFallback = "div[id^='tab-income-tax-brackets'] tbody"
    this.tables = []
    this.rows = []
    this.columns = []
    this.$ = null
  }

  requestDocument () {
    const baseURL = `https://smartasset.com/taxes/${this.currentState}-paycheck-calculator`

    axios.get(baseURL)
      .then(response => {
        this.$ = cheerio.load(response.data)

        this.tables = this.$(this.tableParentSelector)

        if (this.tables.length === 0) {
          this.tables = this.$(this.tableParentSelectorFallback) 
        }

        this.scrapeTables()
      })
  }

  scrapeTables () {
    const _this = this
    this.tables.each(function(i, table) {
      // i will correspond with the filing category of the table
      const filing = _this.filingCategories[i]

      const rows = _this.$(table).find('tr')
      rows.each(function(j, row) {

        const cols = _this.$(rows).find('td')
        cols.each(function(k, col) {
          if (k % 2 !== 0) {

            const tier = (k + 1)/2
            if (!_this.stateBrackets['tier-' + tier]){
              _this.stateBrackets['tier-' + tier] = {}
            }

            let rate = _this.$(col).text().replace('%', '')
            rate = parseInt(rate)/100
            _this.stateBrackets['tier-' + tier]['rate'] = rate
          } else {
            const tier = (k/2) + 1
            let range = _this.$(col).text().split('-'),
                min,
                max

            if (!_this.stateBrackets['tier-' + tier]){
              _this.stateBrackets['tier-' + tier] = {}
            }

            if (range[0]) {
              min = range[0].replace(/\D/g, '')
            }

            if (range[1]) {
              max = range[1].replace(/\D/g, '')
            }
            _this.stateBrackets['tier-' + tier][filing] = {} 
            _this.stateBrackets['tier-' + tier][filing]['min'] = parseInt(min)
            _this.stateBrackets['tier-' + tier][filing]['max'] = parseInt(max) || Infinity
          }
        })

      })
    })
    STATE_TAX_BRACKETS[this.currentState] = this.stateBrackets
    this.next()
  }

  next () {
    if (this.currentIndex === this.states.length - 1) {
      const stringified = JSON.stringify(STATE_TAX_BRACKETS)
      fs.writeFile('state-tax-brackets.js', stringified, function () {})
    }
    this.currentIndex += 1
    this.currentState = this.states[this.currentIndex]
    this.requestDocument()
  }

  setCurrentState () {
    this.currentState = this.states[this.currentIndex]
  }

  init () {
    this.setCurrentState()
    this.requestDocument()
  }
}

const stateIncomeTaxScraper = new Scraper()
stateIncomeTaxScraper.init()
