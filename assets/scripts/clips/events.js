'use strict'
const store = require('./../store.js')
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

const onViewClip = (event) => {
  event.preventDefault()
  const id = event.currentTarget.dataset.id
  // console.log('clip id =', id)
  // refactor so that an API call is not required
  // const clip = store.data.clips.find(clip => clip.id === id)
  // ui.viewClipSuccess(clip)
  api.showClip(id)
    .then(ui.viewClipSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.content').on('submit', '#save-clip', onSaveBook)
  $('.resume-clips').on('click', '.delete-btn', onDeleteClip)
  $('.resume-clips').on('click', '.clip-item', onViewClip)
  // $('#getClipsButton').on('click', onGetClips)
}

module.exports = {
  addHandlers,
  onGetClips
}
