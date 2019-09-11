'use strict'
const store = require('./../store.js')
const handleResponse = require('./../common/handleResponse')
const signInUpTemplate = require('../templates/sign-in-up.handlebars')
const navBarContentTemplate = require('../templates/nav-bar-content.handlebars')
const newClipModalTemplate = require('../templates/new-clip-modal.handlebars')

const loadSignUp = () => {
  const signInUpHtml = signInUpTemplate()
  $('main').html(signInUpHtml)
}
const loadNavAndMain = () => {
  const navHtml = navBarContentTemplate()
  $('nav').html(navHtml)
  const newClipModalHtml = newClipModalTemplate()
  $('main').html(newClipModalHtml)
}

const signUpSuccess = (response) => {
  const action = ['signUp', 'danger', 'success']
  handleResponse(response, action)
  $('form').trigger('reset')
}
// // Sign In
const signInSuccess = (response) => {
  const action = ['signIn', 'danger', 'success']
  handleResponse(response, action, () => {
    loadNavAndMain()
    store.user = response.user
    $('#signed-in-user').text('User:' + store.user.email)
    // $('#on-auth, .login, .on-auth').toggleClass('hidden') // fix this to use invisible where appropriate
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
    $('nav').html(`<a class="navbar-brand" href="#">Resume Clips</a>`)
    // success('Signed Out!')
    // $('#on-auth, .login, .on-auth').toggleClass('hidden')
    // $('#signed-in-user').text('')
    // $('.resume-clips').empty()
  })
  $('form').trigger('reset')
}

module.exports = {
  // success,
  loadSignUp,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
