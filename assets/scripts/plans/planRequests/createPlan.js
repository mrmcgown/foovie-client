const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const getFormFields = require('../../../../lib/get-form-fields.js')

const createPlan = () => {
  $('#add-new-plan').on('submit', event => {
    event.preventDefault()
    const serialized = $('#add-new-plan').serializeArray()
    const planData = {
      plan: {}
    }
    for (let index = 0; index < serialized.length; index++) {
      planData.plan[serialized[index].name] = serialized[index].value
    }
    console.log(planData)
    $.ajax({
      url: config.apiUrl + '/plans',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        planData
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

module.exports = createPlan
