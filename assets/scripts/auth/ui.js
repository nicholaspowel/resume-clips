'use strict'
const store = require('./../store.js')
const handleResponse = require('./../common/handleResponse')

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
