// const getFormFields = require('../../../lib/get-form-fields')

const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn was run.')
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp was run.')
}

module.exports = {
  onSignIn: onSignIn,
  onSignUp: onSignUp
}
