const config = require('../../config.js')
const store = require('../../store')
const plansStorage = require('./plansStorage.js')
const plansTable = require('./plansTable.js')
const editPlan = require('./editPlan.js')
const swal = require('../../sweetAlert.js')

const deletePlan = () => {
  $("button[id^='deletePlan-']").on('click', e => {
    e.preventDefault()
    const id = e.target.id.replace('deletePlan-', '')
    console.log(`on button click, id: ${id}`)
    $('#delete-button').on('click', event => {
      // event.preventDefault()
      console.log(`on submit, id: ${id}`)
      $.ajax({
        url: config.apiUrl + '/plans/' + id,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + store.user.token
        }
      })
        .then(() => {
          console.log(`after ajax call, id: ${id}`)
          const newPlans = []
          for (let index = 0; index < plansStorage.plans.length; index++) {
            if (plansStorage.plans[index]._id !== id) {
              console.log(plansStorage.plans[index]._id)
              newPlans.push(plansStorage.plans[index])
            }
          }
          plansStorage.plans = newPlans
          plansTable()
          $('#deleteModal').modal('hide')
          swal('Successful', 'Plan has been deleted!', 'success')
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

module.exports = deletePlan
