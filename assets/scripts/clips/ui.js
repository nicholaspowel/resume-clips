'use strict'
const store = require('./../store.js')
const showClipsTemplate = require('../templates/clip-listing.handlebars')

const createSuccess = (data) => {
  console.log('created successfully!', data)
  // create a better method of alerting success
  $('form').trigger('reset')
  $('#clipModal').modal('toggle')
}

const showSuccess = (data) => {
  $('form').trigger('reset')
}

const getClipsSuccess = (data) => {
  store.data = data
  const showClipsHtml = showClipsTemplate({ clips: data.clips })
  $('.resume-clips').html(showClipsHtml)
  $('form').trigger('reset')
}
const viewClipSuccess = (data) => {
  console.log(data)
  // should call a handlebars template to display the item
}
const updateSuccess = (data) => {
  $('form').trigger('reset')
}

module.exports = {
  createSuccess,
  showSuccess,
  getClipsSuccess,
  updateSuccess,
  viewClipSuccess
}
