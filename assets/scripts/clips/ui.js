'use strict'
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
  const showClipsHtml = showClipsTemplate({ clips: data.clips })
  $('.resume-clips').html(showClipsHtml)
  $('form').trigger('reset')
}

const updateSuccess = (data) => {
  $('form').trigger('reset')
}

module.exports = {
  createSuccess,
  showSuccess,
  getClipsSuccess,
  updateSuccess
}
