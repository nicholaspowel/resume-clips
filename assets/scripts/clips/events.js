'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSaveBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('The new clip data is:', data, event)
  api.createClip(data)
    .then(ui.createSuccess)
    .catch(ui.failure)
}
const onGetClips = (event) => {
  // if (event) {
  //   event.preventDefault()
  // }
  api.indexClips()
    .then(ui.getClipsSuccess)
    .catch(ui.failure)
}

const onDeleteClip = (event) => {
  event.preventDefault()
  const data = event.currentTarget.dataset
  // $(event.target).data('id')
  api.deleteClip(data)
    // .then(ui.clearClips)
    .then(() => onGetClips(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.content').on('submit', '#save-clip', onSaveBook)
  $('.resume-clips').on('click', '.delete-btn', onDeleteClip)
  // $('#getClipsButton').on('click', onGetClips)
}

module.exports = {
  addHandlers,
  onGetClips
}
