'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSaveBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('The new clip data is:', data, event)
}

const addHandlers = () => {
  $('.content').on('submit', '#save-clip', onSaveBook)
}

module.exports = {
  addHandlers
}
