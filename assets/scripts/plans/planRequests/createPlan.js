const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const editPlan = require('./editPlan.js')
const deletePlan = require('./deletePlan.js')
const swal = require('../../sweetAlert.js')

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
          date: serialized[1].value,
          start_time: serialized[2].value,
          end_time: serialized[3].value,
          food: serialized[4].value,
          movie: serialized[5].value
        }
      }
    })
      .then(data => {
        plansStorage.plans.push(data.plan)
        plansTable()
        console.log(data)
        $('#add-new-plan')[0].reset()
        $('#createModal').modal('hide')
        swal('Successful', 'You added a new plan!', 'success')
      })
      .then(() => {
        deletePlan()
        editPlan()
      })
      .catch(err => {
        console.log(err)
      })
  })
}

module.exports = createPlan
