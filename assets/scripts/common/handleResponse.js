'use strict'
// const store = require('./../store')
const showAlert = require('./alerts')
const messages = require('./messages')
const statusCode = /[4-5][0-9][0-9]/

const handleResponse = (response, success, failure, callback) => {
  if (response && statusCode.test(response.status)) {
    showAlert(messages[failure[0]], failure[1])
    return false
  } else {
    showAlert(messages[success[0]], success[1])
    if (callback) {
      callback()
    }
    return true
  }
}

module.exports = handleResponse
