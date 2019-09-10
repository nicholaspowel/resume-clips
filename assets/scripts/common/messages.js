'use strict'

// the format for keys is: actionName: ['failure string', 'success string']
const messages = {
  signUp: ['Oh my! Something went wrong.  Try again.', 'Sweet! You\'re sign up. Now sign in.'],
  signIn: ['Booooooo... Something went wrong.  Try again.', 'You\'re signed in. Have fun!'],
  signOut: ['Oh my! Something went wrong.  Try again.', 'Sorry to see you go... Come back soon!'],
  changePassword: ['Something went wrong and your password was not changed.  Try again.', 'Done! Password changed.']
}

module.exports = messages
