'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onSaveBook = (event) => {

}

const addHandlers = () => {
  $('.content').on('click', '.save-btn', onSaveBook)
}

module.exports = {
  addHandlers
}
