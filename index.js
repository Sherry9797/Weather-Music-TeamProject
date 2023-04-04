// -----------------------------------
// These code author by Dandan ZHAO

// const apiKey = "605c1e9bc5c9408cad4111856223108";
// const city = "Ottawa";
// const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

// // Fetch the weather data from the OpenWeatherMap API
// const weatherValue = document.getElementsByClassName("temp")[0];
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const temp = Math.round(data.main.temp - 273.15);
//     const weather = data.weather[0].main;
//     const weatherDescription = data.weather[0].description;
//     const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     // Display the weather data on the webpage
//     weatherValue.textContent = `${data.current.temp_c}`;
//     console.log(data);
//     document.getElementById(
//       "weather"
//     ).innerHTML = `${weather} - ${weatherDescription}`;
//     document.getElementById("icon").src = weatherIcon;
//   })
//   .catch((error) => console.log(error));

// // When the dropdown is changed, fetch and display the weather data for the selected city
// document.getElementById("city").addEventListener("change", () => {
//   const city = document.getElementById("city").value;
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const temp = Math.round(data.main.temp - 273.15);
//       const humidity = data.main.humidity;
//       const weather = data.weather[0].main;
//       const weatherDescription = data.weather[0].description;
//       const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//       document.getElementById("temp").innerHTML = `${temp}°C`;
//       document.getElementById("humidity").innerHTML = `${humidity}%`;
//       document.getElementById(
//         "weather"
//       ).innerHTML = `${weather} - ${weatherDescription}`;
//       document.getElementById("icon").src = weatherIcon;
//     })
//     .catch((error) => console.log(error));
// });

//By Victor but please give some credit to  Dandan ZHAO-----------------------------------
if (localStorage.length > 0) {
  let footer = document.getElementById("active1");
  footer.style.display = "flex";
}
//get the content from the playlist
let welcomeText = document.getElementById("welcome");
let Play = document.getElementById("Play");
let Forward = document.getElementById("Forward");
let artistName = document.getElementById("songSection1");
let songLink = document.getElementById("songSection2");
userName = "";
for (let x in localStorage) {
  if (x) {
    userName = localStorage.key(x);
  }
}
welcomeText.textContent = `Welcome ${userName}! Your playlist awaits`;

// These code authod by Victor and Dandan ZHAO
// Get the api form
let formAPI = document.getElementById("weatherLogic");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let weather = document.getElementById("weather");
let cityOption = document.getElementById("city");
let playButton = document.getElementById("parentPlayList2");

formAPI.addEventListener("submit", (e) => {
  playButton.innerHTML = `<div></div>`;
  e.preventDefault();
  if (cityOption.value === "Toronto") {
    playButton.insertAdjacentHTML(
      "afterbegin",
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
    );
  }
  if (cityOption.value === "Vancouver") {
    playButton.insertAdjacentHTML(
      "afterbegin",
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
    );
  } else if (cityOption.value === "Calgary") {
    playButton.insertAdjacentHTML(
      "afterbegin",
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
    );
  } else if (cityOption.value === "Ottawa") {
    playButton.insertAdjacentHTML(
      "afterbegin",
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
    );
  }
  apiKeyV = "605c1e9bc5c9408cad4111856223108";
  let cityName = cityOption.value;
  apiURLV = `https://api.weatherapi.com/v1/current.json?key=${apiKeyV}&q=${cityName}&aqi=no`;
  console.log(cityOption.value);

  fetch(apiURLV)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      temp.innerText = data.current.temp_c + " °C";
      humidity.innerText = data.current.humidity;
      weather.innerText = data.current.condition.text;
    });
});

// Now lets change the info on the default weather containers
let TorontoTemp = document.getElementsByClassName("side-temp")[0];
let TorontoWeather = document.getElementsByClassName("side-weather")[0];
let TorontoWeatherDetails =
  document.getElementsByClassName("side-temp-detail")[0];

// Vancouver
let VancouverTemp = document.getElementById("side-temp2");
let VancouverWeather = document.getElementById("side-weather2");
let VancouverWeatherDetails = document.getElementById("side-temp-detail2");
// Calgary
let CalgaryTemp = document.getElementById("side-temp3");
let CalgaryWeather = document.getElementById("side-weather3");
let CalgaryWeatherDetails = document.getElementById("side-temp-detail3");
TorontoName = "Toronto";
VancouverName = "Vancouver";
CalgaryName = "Calgary";

function fillDate(cityValue, cityTemp, cityWeather, cityDetails) {
  apiKeyV = "605c1e9bc5c9408cad4111856223108";
  apiURLV = `https://api.weatherapi.com/v1/current.json?key=${apiKeyV}&q=${cityValue}&aqi=no`;
  fetch(apiURLV)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityTemp.innerText = data.current.temp_c + " °C";
      cityWeather.innerText = data.current.condition.text;
      cityDetails.innerText = "Feels like " + data.current.feelslike_c + " °C";
    });
}
fillDate(TorontoName, TorontoTemp, TorontoWeather, TorontoWeatherDetails);
fillDate(
  VancouverName,
  VancouverTemp,
  VancouverWeather,
  VancouverWeatherDetails
);
fillDate(CalgaryName, CalgaryTemp, CalgaryWeather, CalgaryWeatherDetails);
// Change the infor from the top where its says Ottawa
OttawaIMG = document.getElementsByClassName("weather-pic")[0];
OttawaTemp = document.getElementById("Ottawatemp2");
OttawaMainWeather = document.getElementById("main-weather2");
fetch(
  "https://api.weatherapi.com/v1/current.json?key=605c1e9bc5c9408cad4111856223108&q=Ottawa&aqi=no"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("from bottom");
    OttawaIMG.setAttribute("src", data.current.condition.icon);
    OttawaTemp.innerText = data.current.temp_c + " °C";
    OttawaMainWeather.innerText = data.current.condition.text;
  });
