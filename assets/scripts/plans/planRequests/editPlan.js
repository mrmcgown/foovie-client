const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')

const editPlan = (data, planId) => {
  $('#update-plan').on('submit', () => {
    $.ajax({
      url: config.apiUrl + '/plans' + planId,
      method: 'Patch',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
      .then(data => {
        plansStorage.plans = data.plans
        plansTable()
        console.log(plansStorage)
      })
      .catch(() => {
        console.log('error')
      })
  })
}

module.exports = editPlan
