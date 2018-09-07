const createPlanModal = () => {
  $('#createModal').remove()
  $('body').append(`
<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Plan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="add-new-plan">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Name of plan">
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" class="form-control" name="date" id="date" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="start_time">Start Time</label>
    <input type="text" class="form-control" name="start_time" id="start_time" placeholder="12:00pm">
  </div>
  <div class="form-group">
  <label for="end_time">End Time</label>
  <input type="text" class="form-control" name="end_time" id="end_time" placeholder="12:00pm">
</div>
<div class="form-group">
<label for="food">Food</label>
<input type="text" class="form-control" name="food" id="food" placeholder="Food type or restaurant">
</div>
<div class="form-group">
<label for="movie">Movie</label>
<input type="text" class="form-control" name="movie" id="movie" placeholder="Movie title">
</div>
  <button type="submit" id="add-plan" class="btn btn-primary">Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`)
}
module.exports = createPlanModal
