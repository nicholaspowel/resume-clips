'use strict'
const store = require('./../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSaveClip = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createClip(data)
    .then(ui.createSuccess)
    .then(onGetClips)
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
    .then(ui.deleteClipSuccess)
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

const onUpdateClip = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateClip(data)
    .then(ui.updateClipSuccess)
    .then(onGetClips)
    .catch(ui.failure)
}
// const onShowEditBtns = (event) => {
//   const id = event.currentTarget.dataset.id
//   ui.showEditButtons(id)
// }
const addHandlers = () => {
  $('.content').on('submit', '#save-clip', onSaveClip)
  $('.content').on('submit', '#update-clip', onUpdateClip)
  $('.content').on('click', '.delete-btn', onDeleteClip)
  // $('.content').on('click', '.update-btn', onShowEditBtns)
  $('.resume-clips').on('click', '.edit-btn', onViewClip)
  $('.new-clip-btn').on('click', ui.loadForm)
  // $('#getClipsButton').on('click', onGetClips)
}

module.exports = {
  addHandlers,
  onGetClips
}
