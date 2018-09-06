const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const createModal = require('./createModal.js')
const createPlan = require('./createPlan.js')
const getPlans = () => {
  $.ajax({
    url: config.apiUrl + '/plans',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
    .then(data => {
      createModal()
      plansStorage.plans = data.plans
      plansTable()
      createPlan()
    })
    .catch(() => {
      console.log('error')
    })
}

module.exports = getPlans
