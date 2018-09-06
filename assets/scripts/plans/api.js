'use strict'

const config = require('../config')
const store = require('../store')

const showPlans = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const addPlan = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deletePlan = function (planId) {
  return $.ajax({
    url: config.apiUrl + '/plans/' + planId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePlan = function (data, planId) {
  return $.ajax({
    url: config.apiUrl + '/plans/' + planId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  showPlans,
  addPlan,
  deletePlan,
  updatePlan
}
