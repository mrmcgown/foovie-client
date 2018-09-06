const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const getFormFields = require('../../../../lib/get-form-fields.js')
const plans = require('./getPlans')
const createPlan = () => {
  $('#add-new-plan').on('submit', event => {
    event.preventDefault()
    const serialized = $('#add-new-plan').serializeArray()
    $.ajax({
      url: config.apiUrl + '/plans',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        plan: {
          name: serialized[0].value,
          food: serialized[1].value,
          movie: serialized[2].value,
          date: serialized[3].value,
          start_time: serialized[4].value,
          end_time: serialized[5].value
        }
      }
    })
      .then(data => {
        plansStorage.plans.push(data.plan)
        plansTable()
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

module.exports = createPlan
