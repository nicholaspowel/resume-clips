'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const clipsEvents = require('./../clips/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// event handler for sign-up form
const onSignUp = (event) => {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
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
    .catch(ui.signOutSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
