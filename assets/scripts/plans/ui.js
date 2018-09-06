'use strict'

const store = require('../store')

const table = document.getElementById('table')

window.textAreaAdjust = function (o) {
  o.style.height = '1px'
  o.style.height = 25 + o.scrollHeight + 'px'
}

const showPlansSuccess = function (data) {
  $('#table').show()
  console.log(data)

  // console.table(data.plans)
  data.plans.forEach(plan => {})

  // console.log('showPlansSuccess ran. Data is :', data)
}

const showPlansFailure = function (error) {
  $('#message')
    .text('Error on show plans')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'red')
  console.log('showPlansFailure ran. Error is :', error)
}

const addPlanSuccess = function (data) {
  console.log('Added plan successfully. Data is:', data)
  $('#message')
    .text('Added plan successfully')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'green')
  $('#add-plan')[0].reset()
  // console.log('addPlanSuccess ran. Data is :', data)
}

const addPlanFailure = function (error) {
  $('#message')
    .text('Error on add plan')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'red')
  console.log('addPlanFailure ran. Error is :', error)
}

const deletePlanSuccess = function (data) {
  $('#message')
    .text('Deleted plan successfully')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'green')
}

const deletePlanFailure = function (error) {
  $('#message')
    .text('Error on delete plan')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'red')
  console.log('deletePlanFailure ran. Error is :', error)
}

const updatePlanSuccess = function (data) {
  $('#message')
    .text('Updated plan successfully')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'green')
  // console.log('updatePlanSuccess ran. Data is :', data)
}

const updatePlanFailure = function (error) {
  $('#message')
    .text('Error on update plan')
    .show()
    .delay(1500)
    .fadeOut()
  $('#message').css('background-color', 'red')
  console.log('updatePlanFailure ran. Error is :', error)
}

module.exports = {
  showPlansSuccess,
  showPlansFailure,
  addPlanSuccess,
  addPlanFailure,
  deletePlanSuccess,
  deletePlanFailure,
  updatePlanSuccess,
  updatePlanFailure
}
