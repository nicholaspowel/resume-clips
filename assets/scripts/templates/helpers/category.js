'use strict'

const category = (cat, optionVal) => {
  return cat === optionVal ? 'selected' : ''
}

module.exports = category
