'use strict'
const store = require('./../store.js')
const showAlert = require('./../common/alerts')
const messages = require('./../common/messages')
const statusCode = /[4-5][0-9][0-9]/
// const success = (message = '') => {
// // does this need anything passed in?
//   $('#message').text('Success!' + message)
//   $('#message').removeClass()
//   // try $('#message').className('success')
//   $('#message').addClass('success') // optional: adds css class for styling
//   $('form').trigger('reset')
// }
// const failure = (message) => {
//   $('#message').text('Error')
//   $('#message').removeClass()
//   $('#message').addClass('failure') // Optional
//   $('form').trigger('reset')
// }
const handleResponse = (response, success, failure, callback) => {
  if (response && statusCode.test(response.status)) {
    showAlert(messages[failure[0]], failure[1])
    return false
  } else {
    showAlert(messages[success[0]], success[1])
    if (callback) {
      callback()
    }
    return true
  }
}
const signUpSuccess = (response) => {
  const success = ['signUpSuccess', 'success']
  const failure = ['signUpFailure', 'danger']
  handleResponse(response, success, failure)
  $('form').trigger('reset')
}
// // Sign In
const signInSuccess = (response) => {
  const success = ['signInSuccess', 'success']
  const failure = ['signInFailure', 'danger']
  handleResponse(response, success, failure, () => {
    store.user = response.user
    $('#signed-in-user').text('User:' + store.user.email)
    $('#on-auth, .login, .on-auth').toggleClass('hidden') // fix this to use invisible where appropriate
  })
  $('form').trigger('reset')
}

// Change Password
const changePasswordSuccess = (response) => {
  const success = ['changePasswordSuccess', 'success']
  const failure = ['changePasswordFailure', 'danger']
  handleResponse(response, success, failure)
  $('form').trigger('reset')
}

// Sign Out
const signOutSuccess = (response) => {
  const success = ['signOutSuccess', 'success']
  const failure = ['signOutFailure', 'danger']
  handleResponse(response, success, failure, () => {
    store.user = null
    store.data = null
    $('#signed-in-user').text('')
    // success('Signed Out!')
    $('#on-auth, .login, .on-auth').toggleClass('hidden')
    $('#signed-in-user').text('')
    $('.resume-clips').empty()
  })
  $('form').trigger('reset')
}

module.exports = {
  // success,
  // failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
