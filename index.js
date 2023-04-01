// -----------------------------------
// These code author by Dandan ZHAO

const apiKey = "605c1e9bc5c9408cad4111856223108";
const city = "Ottawa";
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

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
