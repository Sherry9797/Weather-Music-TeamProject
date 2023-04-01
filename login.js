// The following code author by Yiqing Song
// use cookie for log in content
window.addEventListener('DOMContentLoaded', () => {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const checkbox = document.getElementById('check')
  const submit = document.getElementById('remember')
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const key = 'username'
    const value = encodeURIComponent(username.value)
    const sevenDays = 7 * 24 * 60 * 60
    if (username.value === '' || password.value === '') {
      alert('Please fill the required fields!')
      return
    }
    if (checkbox.checked) {
      document.cookie = `${key}=${value};max-age=${sevenDays}`
    }
    alert(`Thank you for logging in, ${username.value}!`)
  })
})

const $modal = document.getElementById('modal')
const windowFeatures = 'height=400,width=400,resizable=yes,scrollbars=yes,status=yes'

$modal.addEventListener('click', () => {
  window.open('login.html', 'LoginWindow', windowFeatures)
})
