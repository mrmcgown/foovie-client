'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const createPlan = require('../plans/planRequests/createPlan')
const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  api
    .signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  api
    .signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran')

  const data = getFormFields(this)

  api
    .changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('signout ran')
  api
    .signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $(
    '#table, .plan-changes, #sign-out, #changePassButton, #options, #plans-search, #add-plan, #delete-plan, #update-plan'
  ).hide()
}

module.exports = {
  addHandlers
}
