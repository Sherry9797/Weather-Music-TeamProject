// These code author by Dandan ZHAO

const apiKey = 'c8725c99582e6b7913b5136a66b58338'
const city = 'new york'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// Fetch the weather data from the OpenWeatherMap API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp - 273.15)
    const weather = data.weather[0].main
    const weatherDescription = data.weather[0].description
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    // Display the weather data on the webpage
    document.getElementById('temp').innerHTML = `${temp}°C`
    document.getElementById('weather').innerHTML = `${weather} - ${weatherDescription}`
    document.getElementById('icon').src = weatherIcon
  })
  .catch(error => console.log(error))

// When the "Play Music" button is clicked, use the Spotify Web API to play music based on the weather
const playButton = document.getElementById('play-music')
playButton.addEventListener('click', () => {
  const spotifyApiKey = '9a9643ecc0aa417582f0af96a6736da8'
  const spotifyApiSecret = '6704e1d5f37e40f988186ce24b9f94b4'
})

// The following code author by Yiqing Song
// use cookie for log in content
window.addEventListener('DOMContentLoaded', () => {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const checkbox = document.getElementById('check')
  const submit = document.getElementById('remember')
  submit.addEventListener('click', e => {
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

// use localStorage
const $history = document.getElementById('history')
const Is = localStorage.getItem('logs')
const logs = Is ? JSON.parse(Is) : []
renderHistory(logs)

function createLog(json) {
  const temp = Math.round(json.main.temp - 273.15)
  const weather = json.weather[0].main
  const weatherDescription = json.weather[0].description
  return {
    original: JSON.stringify(json),
    temp,
    weather,
    weatherDescription
  }
}

function renderHistory(logs) {
  $history.innerHTML = ''
  logs.forEach(log => {
    const $el = document.createElement('div')
    $el.classList.add('list-group-item')
    $el.innerHTML = `<strong>${log.temp}°C - ${log.weather} - ${log.weatherDescription}</strong>`
    $history.append($el)
  })
}

function saveHistory(logs) {
  localStorage.setItem('logs', JSON.stringify(logs))
}

const $historyButton = document.getElementById('historybutton')

$historyButton.addEventListener('click', async function (e) {
  e.preventDefault()
  const response = await fetch(apiUrl)
  const json = await response.json()
  logs.unshift(createLog(json))
  renderHistory(logs)
  saveHistory(logs)
})

const $clear = document.getElementById('clear')
$clear.addEventListener('click', clear)

function clear() {
  localStorage.clear()
  logs.length = 0
  $history.innerHTML = ''
}
