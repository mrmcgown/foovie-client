import swal from 'sweetalert'

const modalAlert = (message1, message2, option) => {
  return swal(message1, message2, option)
}
module.exports = modalAlert
