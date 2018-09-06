const plansStorage = require('./plansStorage.js')
const plansTable = () => {
  $('#plansTable').remove()
  const headTable = `
<button type="button" data-toggle="modal" data-target="#createModal" style="margin:10px;" class="btn btn-primary" >Add New Plan</button>
<table class="table" id="plansTable">
<thead>
<tr>
  <th scope="col">Name</th>
  <th scope="col">Date</th>
  <th scope="col">Start Time</th>
  <th scope="col">End Time</th>
  <th scope="col">Food</th>
  <th scope="col">Movie</th>
  <th scope="col">Options</th>
</tr>
</thead>
<tbody>

`
  let bodyTable = ''

  for (let index = 0; index < plansStorage.plans.length; index++) {
    bodyTable += `
      <tr>
      <td>${plansStorage.plans[index].name}</td>
      <td>${plansStorage.plans[index].date}</td>
      <td>${plansStorage.plans[index].start_time}</td>
      <td>${plansStorage.plans[index].end_time}</td>
      <td>${plansStorage.plans[index].food}</td>
      <td>${plansStorage.plans[index].movie}</td>
      <td>
        <button type="button" id='${
  plansStorage.plans[index]._id
}' class="btn btn-warning">Edit</button>
        <button type="button" id='${
  plansStorage.plans[index]._id
}' class="btn btn-danger">Delete</button>
      </td>
    </tr>
    `
  }
  bodyTable += `
</tbody>
</table>

`
  $('#content-container').append(`${headTable}${bodyTable}`)
}
module.exports = plansTable
