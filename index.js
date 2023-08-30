// These code author by Victor and Dandan ZHAO, Dandan ZHAO did weather api, Victor base these code updated them to dynamically diplay by location.
// Get the api form
const formAPI = document.getElementById('weatherLogic')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const weather = document.getElementById('weather')
const cityOption = document.getElementById('city')
const playButton = document.getElementById('parentPlayList2')

formAPI.addEventListener('submit', (e) => {
  playButton.innerHTML = '<div></div>'
  e.preventDefault()
  if (cityOption.value === 'Toronto') {
    playButton.insertAdjacentHTML(
      'afterbegin',
      `<div  style="display: flex; align-content: center; justify-content: center;">
    <iframe
      src="https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?si=mydjbKwAQb-WP3OI2Hlurg"
      width="300"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>`
    )
  }
  if (cityOption.value === 'Vancouver') {
    playButton.insertAdjacentHTML(
      'afterbegin',
      `<div style="display: flex; align-content: center; justify-content: center;">
      <iframe 
      src="https://open.spotify.com/embed/artist/3Ofw9tqhmFrQV7kVmQsOl1?si=B4hIMVw6TAKR031gXU-j2Q" 
      width="300" 
      height="80"  
      frameborder="0" 
      allowtransparency="true" 
      allow="encrypted-media"
      ></iframe>
      </div>`
    )
  } else if (cityOption.value === 'Calgary') {
    playButton.insertAdjacentHTML(
      'afterbegin',
      `<div style="display: flex; align-content: center; justify-content: center;">
      <iframe
        src="https://open.spotify.com/embed/artist/209owUSIqCjOCdahzFWdl8?si=JBotvA2-QY-6OxgeNR0ilA"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>`
    )
  } else if (cityOption.value === 'Ottawa') {
    playButton.insertAdjacentHTML(
      'afterbegin',
      `<div style="display: flex; align-content: center; justify-content: center;">
        <iframe
          src="https://open.spotify.com/embed/artist/2y246nnP9pQT0E6v3ZMMOO?si=v5DIln4oQXSOBoAKv7oheA"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>`
    )
  }
  apiKeyV = '22c8e168f6cc4fb4939142745233008'
  const cityName = cityOption.value
  apiURLV = `https://api.weatherapi.com/v1/current.json?key=${apiKeyV}&q=${cityName}&aqi=no`

  fetch(apiURLV)
    .then((res) => res.json())
    .then((data) => {
      temp.innerText = data.current.temp_c + ' °C'
      humidity.innerText = data.current.humidity
      weather.innerText = data.current.condition.text
    })
})

// Now lets change the info on the default weather containers
const TorontoTemp = document.getElementsByClassName('side-temp')[0]
const TorontoWeather = document.getElementsByClassName('side-weather')[0]
const TorontoWeatherDetails =
  document.getElementsByClassName('side-temp-detail')[0]

// Vancouver
const VancouverTemp = document.getElementById('side-temp2')
const VancouverWeather = document.getElementById('side-weather2')
const VancouverWeatherDetails = document.getElementById('side-temp-detail2')
// Calgary
const CalgaryTemp = document.getElementById('side-temp3')
const CalgaryWeather = document.getElementById('side-weather3')
const CalgaryWeatherDetails = document.getElementById('side-temp-detail3')
TorontoName = 'Toronto'
VancouverName = 'Vancouver'
CalgaryName = 'Calgary'

function fillDate (cityValue, cityTemp, cityWeather, cityDetails) {
  apiKeyV = '22c8e168f6cc4fb4939142745233008'
  apiURLV = `https://api.weatherapi.com/v1/current.json?key=${apiKeyV}&q=${cityValue}&aqi=no`
  fetch(apiURLV)
    .then((res) => res.json())
    .then((data) => {
      cityTemp.innerText = data.current.temp_c + ' °C'
      cityWeather.innerText = data.current.condition.text
      cityDetails.innerText = 'Feels like ' + data.current.feelslike_c + ' °C'
    })
}
fillDate(TorontoName, TorontoTemp, TorontoWeather, TorontoWeatherDetails)
fillDate(
  VancouverName,
  VancouverTemp,
  VancouverWeather,
  VancouverWeatherDetails
)
fillDate(CalgaryName, CalgaryTemp, CalgaryWeather, CalgaryWeatherDetails)
// Change the infor from the top where its says Ottawa

// Get the location of the user
OttawaIMG = document.getElementsByClassName('weather-pic')[0]
OttawaTemp = document.getElementById('Ottawatemp2')
OttawaMainWeather = document.getElementById('main-weather2')
const currentCityName = document.getElementsByClassName('main-city')[0]
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayPosition)
} else {
  alert('You selected not to share your location')
}
const backgroundIM = document.getElementsByClassName('hero-section')[0]
function displayPosition (p) {
  console.log(p.coords.latitude)
  console.log(p.coords.longitude)
  locationURLLive = `https://us1.locationiq.com/v1/reverse?key=pk.6483a3886385b42a2fd214994041ae8c&lat=${p.coords.latitude}&lon=${p.coords.longitude}&format=json`
  fetch(locationURLLive)
    .then((res) => res.json())
    .then((data) => {
      currentCityName.textContent = `Your city is ${data.address.city}`
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=22c8e168f6cc4fb4939142745233008&q=${data.address.city}&aqi=no`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          OttawaIMG.setAttribute('src', data.current.condition.icon)
          OttawaTemp.innerText = data.current.temp_c + ' °C'
          OttawaMainWeather.innerText = data.current.condition.text
          const conditionText = data.current.condition.text.toLowerCase()
          const conditionTextArray = conditionText.split(' ')
          console.log(conditionTextArray)
          if (
            conditionTextArray.includes('sunny') ||
            conditionTextArray.includes('sun')
          ) {
            backgroundIM.setAttribute(
              'style',
              'background-image: linear-gradient(rgba(36, 35, 35, 0.4), rgba(35, 34, 34, 0.4)), url(backgroundimg/sunny.jpg);'
            )
          } else if (
            conditionTextArray.includes('cloud') ||
            conditionTextArray.includes('cloudy') ||
            conditionTextArray.includes('overcast')
          ) {
            backgroundIM.setAttribute(
              'style',
              'background-image: linear-gradient(rgba(36, 35, 35, 0.4), rgba(35, 34, 34, 0.4)), url(backgroundimg/cloudy.jpg);'
            )
          } else if (
            conditionTextArray.includes('snow') ||
            conditionTextArray.includes('snowy') ||
            conditionTextArray.includes('snowing')
          ) {
            backgroundIM.setAttribute(
              'style',
              'background-image: linear-gradient(rgba(36, 35, 35, 0.4), rgba(35, 34, 34, 0.4)), url(backgroundimg/snow.jpg);'
            )
          } else if (
            conditionTextArray.includes('rain') ||
            conditionTextArray.includes('rainy')
          ) {
            backgroundIM.setAttribute(
              'style',
              'background-image: linear-gradient(rgba(36, 35, 35, 0.4), rgba(35, 34, 34, 0.4)), url(backgroundimg/rainy.jpg);'
            )
          } else if (conditionTextArray.includes('clear')) {
            backgroundIM.setAttribute(
              'style',
              'background-image: linear-gradient(rgba(36, 35, 35, 0.4), rgba(35, 34, 34, 0.4)), url(img/white-cloud-blue-sky.jpg);'
            )
          }
        })
    })
}

// By Victor
if (localStorage.length > 0) {
  const footer = document.getElementById('active1')
  footer.style.display = 'flex'
}
// get the content from the playlist
const welcomeText = document.getElementById('welcome')
const Play = document.getElementById('Play')
const Forward = document.getElementById('Forward')
const artistName = document.getElementById('songSection1')
const songLink = document.getElementById('songSection2')
userName = ''
for (const x in localStorage) {
  if (x) {
    userName = localStorage.key(x)
  }
}
welcomeText.textContent = `Welcome ${userName}! Your playlist awaits`
