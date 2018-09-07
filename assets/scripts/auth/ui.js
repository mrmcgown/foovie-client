'use strict'

const store = require('../store')
// import swal from 'sweetalert'
const swal = require('../sweetAlert.js')
const getPlans = require('../plans/planRequests/getPlans.js')

const signUpSuccess = function (data) {
  $('#signUp').modal('hide')
  store.user = data.user
  swal('Good job!', 'You signed up!', 'success')
  $('#sign-up')[0].reset()
}

const signUpFailure = function (error) {
  if (error) {
    swal('Oh no!', 'There was an error on sign up.', 'error')
  }
}

const signInSuccess = function (data) {
  $('#sign-in')[0].reset()
  $(
    '#table-headers, .plan-changes, #sign-out, #changePassButton, #options, #plans-search, #add-plan, #delete-plan, #update-plan'
  ).show()
  $('#table, #signUpButton, #signInButton').hide()
  $('#signIn').modal('hide')
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  swal('Welcome', 'You signed in!', 'success')
  getPlans()
}

const signInFailure = function (error) {
  if (error) {
    swal('Oh no!', 'There was an error on sign in.', 'error')
  }
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#changePassword').modal('hide')
  swal('Good job!', 'You changed your password!', 'success')
}

const changePasswordFailure = function (error) {
  if (error) {
    swal('Oh no!', 'There was an error changing your password.', 'error')
  }
}

const signOutSuccess = function () {
  $(
    '#table, #table-headers, .plan-changes, #sign-out, #changePassButton, #options, #plans-search, #add-plan, #delete-plan, #update-plan'
  ).hide()
  $('#signUpButton, #signInButton').show()
  store.user = null
  $('#plansTable, #add-plan-button').remove()

  swal('Goodbye!', 'You signed out.', 'success')
}

const signOutFailure = function (error) {
  if (error) {
    swal('Oh no!', 'There was an error on sign up.', 'error')
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
