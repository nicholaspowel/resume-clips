'use strict'
const store = require('./../store.js')
const showClipsTemplate = require('../templates/clip-listing.handlebars')
// TODO make this more DRY. massively duplicating code to get MVP
const clipsUpdateFormTemplate = require('../templates/clips-update-form.handlebars')
const clipsFormTemplate = require('../templates/clips-form.handlebars')
const createSuccess = (data) => {
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
  // will be refactored to be more DRY later
  const clipsUpdateFormHtml = clipsUpdateFormTemplate({ clip: data.clip })
  $('.content').html(clipsUpdateFormHtml)
  $('#clipModal').modal('toggle')
  // should call a handlebars template to display the item
}
const loadForm = () => {
  const clipsFormHtml = clipsFormTemplate()
  $('.content').html(clipsFormHtml)
}
const updateClipSuccess = (data) => {
  console.log(data)
  $('form').trigger('reset')
}

module.exports = {
  createSuccess,
  showSuccess,
  getClipsSuccess,
  updateClipSuccess,
  viewClipSuccess,
  loadForm
}
