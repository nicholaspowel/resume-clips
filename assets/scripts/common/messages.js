'use strict'

// the format for keys is: actionName: ['failure string', 'success string']
const messages = {
  // auth messages
  signUp: ['Oh my! Something went wrong.  Try again.', 'Sweet! You\'re sign up. Now sign in.'],
  signIn: ['Booooooo... Something went wrong.  Try again.', 'You\'re signed in. Have fun!'],
  signOut: ['Oh my! Something went wrong.  Try again.', 'Sorry to see you go... Come back soon!'],
  changePassword: ['Something went wrong and your password was not changed.  Try again.', 'Done! Password changed.'],
  // clips messages
  createClip: ['Oh no! Something went wrong and your clip wasn\'t saved', 'Your clip was saved!'],
  deleteClip: ['Something went wrong, and your clip wasn\'t deleted', 'Your clip was successfully deleted!'],
  indexClips: ['Ooooh, there was a problem fetching your clips! Try again.', 'Your clips were retrieved successfully!'],
  updateClip: ['Oops! There was a problem and your clip wasn\'t updated! Try again.', 'Your clip was updated!']
}

module.exports = messages
