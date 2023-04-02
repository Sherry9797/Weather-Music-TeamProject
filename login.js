// The following code author by Yiqing Song
// use cookie for log in content

window.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login')
  const $username = document.getElementById('username')
  const $password = document.getElementById('password')
  const $check = document.getElementById('check')
  const key = 'username'
  const sevenDays = 7 * 24 * 60 * 60

  // Check if cookie exists
  const cookieValue = getCookie(key)
  if (cookieValue) {
    $username.value = decodeURIComponent(cookieValue)
    const storedPassword = localStorage.getItem(cookieValue)
    if (storedPassword) {
      $password.value = storedPassword
    }
  }

  // check username and password
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const enteredUsername = $username.value
    const enteredPassword = $password.value
    const storedPassword = localStorage.getItem(enteredUsername)
    if (storedPassword === null) {
      alert('Username not found')
    } else if (storedPassword !== enteredPassword) {
      alert('Incorrect password')
    } else {
      if ($check.checked) {
        document.cookie = `${key}=${encodeURIComponent(enteredUsername)};max-age=${sevenDays}`
      } else {
        if (getCookie(key)) {
          document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
        }
      }
      alert(`Thank you for logging in, ${enteredUsername}!`)
    }
  })
})
// get cookie value
function getCookie (cookiename) {
  const $name = cookiename + '='
  const cookieArray = document.cookie.split(';')
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i]
    if (cookie.indexOf($name) === 0) {
      return cookie.substring($name.length, cookie.length)
    }
  }
  return null
}

// open in a popup window
const $modal = document.getElementById('modal')

const windowFeatures = 'height=500,width=500,top=' + (screen.height / 2 - 250) + ',left=' + (screen.width / 2 - 250)

$modal.addEventListener('click', () => {
  window.open('login.html', 'LoginWindow', windowFeatures)
})
