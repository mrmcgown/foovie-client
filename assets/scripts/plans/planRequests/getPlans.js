const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const createModal = require('./createModal.js')
const createPlan = require('./createPlan.js')
const editPlan = require('./editPlan.js')
const editModal = require('./editModal.js')
const deletePlan = require('./deletePlan.js')
const deleteModal = require('./deleteModal.js')

const getPlans = () => {
  $.ajax({
    url: config.apiUrl + '/plans',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
    .then(data => {
      plansStorage.plans = data.plans
      plansTable()
    })
    .then(() => {
      createModal()
      editModal()
      deleteModal()
      createPlan()
      editPlan()
      deletePlan()
      console.log(plansStorage)
    })
    .catch(() => {
      console.log('error')
    })
}

module.exports = getPlans
