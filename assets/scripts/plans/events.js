'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const plansApi = require('./api')
const ui = require('./ui')

const onShowPlans = function (event) {
  event.preventDefault()
  console.log('show plans ran!')

  plansApi
    .showPlans()
    .then(ui.showPlansSuccess)
    .catch(ui.showPlansFailure)
}

const onAddPlan = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  plansApi
    .addPlan(data)
    .then(() => onShowPlans(event))
    .then(ui.addPlanSuccess)
    .catch(ui.addPlanFailure)
}

const onDeletePlan = function (event) {
  event.preventDefault()
  // console.log('delete plan ran!')
  const planId = $(event.target)
  // .closest("form.tr")
  // .attr("data-id");

  // console.log(planId)
  plansApi
    .deletePlan(planId)
    .then(ui.deletePlanSuccess)
    .then(() => onShowPlans(event))
    .catch(ui.deletePlanFailure)
}

const onUpdatePlan = function (event) {
  event.preventDefault()
  // console.log('update plan ran')
  const planId = $(event.target)
  // .closest("form.tr")
  // .attr("data-id");
  // console.log(planId)

  //   $("[data-id=" + planId + "]")
  //     .find("button.updBut")
  //     .html("Save");
  //   $("[data-id=" + planId + "]")
  //     .find("textarea")
  //     .prop("readonly", false)
  //     .css("outline", "auto -webkit-focus-ring-color");
  //   $("[data-id=" + planId + "]")
  //     .find("button.updBut")
  //     .removeClass("updBut")
  //     .addClass("savBut");
  //   $("[data-id=" + planId + "]")
  //     .find("button.savBut")
  //     .prop("type", "submit");
}

const onSavePlan = function (event) {
  event.preventDefault()
  // console.log('save plan ran')
  const planId = $(event.target)
    .closest('form.tr')
    .attr('data-id')
  // console.log(planId)

  let data = {}

  $(event.target)
    .find('textarea')
    .each((_, el) => {
      data[el.name] = el.value
    })

  data = { plan: data }

  // console.log(`Data to patch is`, data)

  api
    .updatePlan(data, planId)
    .then(ui.updatePlanSuccess)
    .catch(ui.updatePlanFailure)

  //   $("[data-id=" + planId + "]")
  //     .find("button.savBut")
  //     .html("Update");
  //   $("[data-id=" + planId + "]")
  //     .find("textarea")
  //     .prop("readonly", true)
  //     .css("outline", "none");
  //   $("[data-id=" + planId + "]")
  //     .find("button.savBut")
  //     .removeClass("savBut")
  //     .addClass("updBut");
}

const addHandlers = () => {
  $('#plans-search').on('submit', onShowPlans)
  $('#add-plan').on('submit', onAddPlan)
  $('#table, #options').hide()
}

const addTableHandlers = () => {
  $('#table').on('click', 'button.delBut', onDeletePlan)
  $('#table').on('click', 'button.updBut', onUpdatePlan)
  $('form.tr').on('submit', onSavePlan)
}

module.exports = {
  onShowPlans,
  addHandlers,
  addTableHandlers
}
