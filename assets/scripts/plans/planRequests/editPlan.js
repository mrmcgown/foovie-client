const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const deletePlan = require('./deletePlan.js')
const swal = require('../../sweetAlert.js')

const editPlan = () => {
  $("button[id^='plan-']").on('click', e => {
    const id = e.target.id.replace('plan-', '')
    console.log(`on button click, id: ${id}`)
    $('#edit-plan').on('submit', event => {
      event.preventDefault()
      console.log(`on submit, id: ${id}`)
      const serialized = $('#edit-plan').serializeArray()

      $.ajax({
        url: config.apiUrl + '/plans/' + id,
        method: 'PATCH',
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
          console.log(`after ajax call, id: ${id}`)
          const newPlans = []
          for (let index = 0; index < plansStorage.plans.length; index++) {
            if (plansStorage.plans[index]._id !== data._id) {
              newPlans.push(plansStorage.plans[index])
            }
          }
          newPlans.push(data)
          plansStorage.plans = newPlans
          plansTable()
          $('#edit-plan')[0].reset()
          $('#editModal').modal('hide')
          swal('Successful', 'Your plan has been edited!', 'success')
        })
        .then(() => {
          deletePlan()
          editPlan()
        })
        .catch(err => {
          console.log(err)
        })
    })
  })
}

module.exports = editPlan
