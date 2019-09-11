'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const clipsEvents = require('./../clips/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onLoad = () => ui.loadSignUp()
// event handler for sign-up form
const onSignUp = (event) => {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      // refactor to make code more dry
      const newData = {credentials: {}}
      newData.credentials.email = data.credentials.email
      newData.credentials.password = data.credentials.password
      api.signIn(newData)
        .then(ui.signInSuccess)
        .catch(ui.signInSuccess)
    })
    .catch(() => {
      const newData = {credentials: {}}
      newData.credentials.email = data.credentials.email
      newData.credentials.password = data.credentials.password
      api.signIn(newData)
        .then(ui.signInSuccess)
        .then(clipsEvents.onGetClips)
        .catch(ui.signUpSuccess)
    })
    .catch(ui.signUpSuccess)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(clipsEvents.onGetClips) // Loads up the users clips so they are visible immediately
    .catch(ui.signInSuccess)
}

// CHANGE PASSWORD

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target) // {passwords: {old: 123, new: 456}}

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordSuccess)
}

// SIGN OUT

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(onLoad)
    .catch(ui.signOutSuccess)
}

const addHandlers = () => {
  $('body').on('submit', '#sign-up', onSignUp)
  $('body').on('submit', '#sign-in', onSignIn)
  $('body').on('click', '#sign-out', onSignOut)
  $('body').on('submit', '#change-password', onChangePassword)
}

module.exports = {
  onLoad,
  addHandlers
}
