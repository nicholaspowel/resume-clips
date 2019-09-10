'use strict'
const store = require('./../store.js')
const handleResponse = require('./../common/handleResponse')

const signUpSuccess = (response) => {
  const action = ['signUp', 'danger', 'success']
  handleResponse(response, action)
  $('form').trigger('reset')
}
// // Sign In
const signInSuccess = (response) => {
  const action = ['signIn', 'danger', 'success']
  handleResponse(response, action, () => {
    store.user = response.user
    $('#signed-in-user').text('User:' + store.user.email)
    $('#on-auth, .login, .on-auth').toggleClass('hidden') // fix this to use invisible where appropriate
  })
  $('form').trigger('reset')
}

// Change Password
const changePasswordSuccess = (response) => {
  const action = ['changePassword', 'danger', 'success']
  handleResponse(response, action)
  $('form').trigger('reset')
}

// Sign Out
const signOutSuccess = (response) => {
  const action = ['signOut', 'danger', 'info']
  handleResponse(response, action, () => {
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
