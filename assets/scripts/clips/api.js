'use strict'
const config = require('../config')
const store = require('../store')

const createClip = (data) => {
  return $.ajax({
    url: config.apiUrl + '/clips',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const indexClips = () => {
  return $.ajax({
    url: config.apiUrl + '/clips',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showClip = (data) => {
  return $.ajax({
    url: config.apiUrl + '/clips/' + data.clip.id, // TODO check this
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const destroyClip = (data) => {
  return $.ajax({
    url: config.apiUrl + '/clips/' + data.clip.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateClip = (data) => {
  return $.ajax({
    url: config.apiUrl + '/clips/' + data.clip.id, // TODO check this
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createClip,
  showClip,
  indexClips,
  destroyClip,
  updateClip
}
