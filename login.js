// The following code author by Yiqing Song
// use cookie for log in content
window.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const loginUserName = document.getElementById('username')
    const loginPassword = document.getElementById('password')
    const checkbox = document.getElementById('check')
    const key = 'username'
    const value = encodeURIComponent(username.value)
    const sevenDays = 7 * 24 * 60 * 60

    const storedPassword = localStorage.getItem(loginUserName.value)
    if (storedPassword === null) {
      alert('Username not found')
    } else if (storedPassword !== loginPassword.value) {
      alert('Incorrect password')
    }
    else if (checkbox.checked) {
      document.cookie = `${key}=${value};max-age=${sevenDays}`
      alert(`Thank you for logging in, ${username.value}!`)
    } else {
      alert(`Thank you for logging in, ${username.value}!`)
    }
  }
  )
}
)
const $modal = document.getElementById('modal')

const windowFeatures = 'height=500,width=500,top=' + (screen.height / 2 - 250) + ',left=' + (screen.width / 2 - 250)

$modal.addEventListener('click', () => {
  window.open('login.html', 'LoginWindow', windowFeatures)
})
