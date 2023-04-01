// The following code author by Yiqing Song
// use localstorage to save data
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const $name = document.getElementById('name').value
  const $email = document.getElementById('email').value
  const $message = document.getElementById('message').value
  const data = JSON.parse(localStorage.getItem('formData')) || []

  data.push({ $name, $email, $message })

  localStorage.setItem('formData', JSON.stringify(data))
  alert('Thank you for your valuable suggestions! We wish you a happy life!')
  form.reset()
})
