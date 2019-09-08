'use strict'

const createSuccess = (data) => {
  console.log('created successfully!', data)
  // create a better method of alerting success
  $('form').trigger('reset')
}

const indexSuccess = (data) => {
  $('form').trigger('reset')
}

const updateSuccess = (data) => {
  $('form').trigger('reset')
}

module.exports = {
  createSuccess,
  indexSuccess,
  updateSuccess
}
