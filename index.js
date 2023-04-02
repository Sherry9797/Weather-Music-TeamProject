// -----------------------------------
// These code author by Dandan ZHAO

const apiKey = "605c1e9bc5c9408cad4111856223108";
const city = "Ottawa";
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

// Fetch the weather data from the OpenWeatherMap API
const weatherValue = document.getElementsByClassName("temp")[0];
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temp = Math.round(data.main.temp - 273.15);
    const weather = data.weather[0].main;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Display the weather data on the webpage
    weatherValue.textContent = `${data.current.temp_c}`;
    console.log(data);
    document.getElementById(
      "weather"
    ).innerHTML = `${weather} - ${weatherDescription}`;
    document.getElementById("icon").src = weatherIcon;
  })
  .catch((error) => console.log(error));

// When the dropdown is changed, fetch and display the weather data for the selected city
document.getElementById("city").addEventListener("change", () => {
  const city = document.getElementById("city").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp - 273.15);
      const humidity = data.main.humidity;
      const weather = data.weather[0].main;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.getElementById("temp").innerHTML = `${temp}°C`;
      document.getElementById("humidity").innerHTML = `${humidity}%`;
      document.getElementById(
        "weather"
      ).innerHTML = `${weather} - ${weatherDescription}`;
      document.getElementById("icon").src = weatherIcon;
    })
    .catch((error) => console.log(error));
});
//By Victor-----------------------------------
if (localStorage.length > 0) {
  let footer = document.getElementById("active1");
  footer.style.display = "flex";
}
//get the content from the playlist
let welcomeText = document.getElementById("welcome");
let Back = document.getElementById("Back");
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
