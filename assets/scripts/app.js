'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
// const uploadEvents = require('./upload/events')

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  //
  // $('#multipart-form-data').on('submit', uploadEvents.onCreateUpload)
  // $('#update-upload-form').on('submit', uploadEvents.onUpdateUpload)
  // $('.delete').on('submit', uploadEvents.onDelete)
})
