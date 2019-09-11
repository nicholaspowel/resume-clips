'use strict'
const store = require('./../store.js')
const showClipsTemplate = require('../templates/clip-listing.handlebars')
// TODO make this more DRY. massively duplicating code to get MVP
const clipsUpdateFormTemplate = require('../templates/clips-update-form.handlebars')
const clipsFormTemplate = require('../templates/clips-form.handlebars')
const handleResponse = require('./../common/handleResponse')
// For using the same style of notifications as the auth ui
// const showAlert = require('./../common/alerts')
// const messages = require('./../common/messages')
// const statusCode = /[4-5][0-9][0-9]/

// const newClip = {
//   description: '',
//   location: '',
//   start_time: null,
//   end_time: null,
//   title: '',
//   position: '',
//   category: ''
// }

const createSuccess = (response) => {
  // create a better method of alerting success
  const action = ['createClip', 'danger', 'success']
  handleResponse(response, action, () => {
    $('form').trigger('reset')
    $('#clipModal').modal('toggle')
  })
}

const deleteClipSuccess = (response) => {
  const action = ['deleteClip', 'danger', 'success']
  handleResponse(response, action, () => {
    $('#clipModal').modal('toggle')
    $('.content').empty()
  })
}
const showSuccess = (response) => {
  $('form').trigger('reset')
}

const getClipsSuccess = (data) => {
  store.data = data
  $('.resume-clips').empty()
  const showClipsHtml = showClipsTemplate({ clips: data.clips })
  $('.resume-clips').html(showClipsHtml)
  $('form').trigger('reset')
}
const viewClipSuccess = (data) => {
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
  $('#clipModal').modal('toggle')
  $('.content').empty()
}

module.exports = {
  createSuccess,
  showSuccess,
  deleteClipSuccess,
  getClipsSuccess,
  updateClipSuccess,
  viewClipSuccess,
  loadForm
}
