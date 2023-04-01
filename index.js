//-----------------------------------
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

// The following code author by Yiqing Song
// use cookie for log in content
window.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const checkbox = document.getElementById("check");
  const submit = document.getElementById("remember");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const key = "username";
    const value = encodeURIComponent(username.value);
    const sevenDays = 7 * 24 * 60 * 60;
    if (username.value === "" || password.value === "") {
      alert("Please fill the required fields!");
      return;
    }
    if (checkbox.checked) {
      document.cookie = `${key}=${value};max-age=${sevenDays}`;
    }
    alert(`Thank you for logging in, ${username.value}!`);
  });
});

// use localStorage
const $history = document.getElementById("history");
const Is = localStorage.getItem("logs");
const logs = Is ? JSON.parse(Is) : [];
renderHistory(logs);

function createLog(json) {
  const temp = Math.round(json.main.temp - 273.15);
  const weather = json.weather[0].main;
  const weatherDescription = json.weather[0].description;
  return {
    original: JSON.stringify(json),
    temp,
    weather,
    weatherDescription,
  };
}

function renderHistory(logs) {
  $history.innerHTML = "";
  logs.forEach((log) => {
    const $el = document.createElement("div");
    $el.classList.add("list-group-item");
    $el.innerHTML = `<strong>${log.temp}°C - ${log.weather} - ${log.weatherDescription}</strong>`;
    $history.append($el);
  });
}

function saveHistory(logs) {
  localStorage.setItem("logs", JSON.stringify(logs));
}

const $historyButton = document.getElementById("historybutton");

$historyButton.addEventListener("click", async function (e) {
  e.preventDefault();
  const response = await fetch(apiUrl);
  const json = await response.json();
  logs.unshift(createLog(json));
  renderHistory(logs);
  saveHistory(logs);
});

const $clear = document.getElementById("clear");
$clear.addEventListener("click", clear);

function clear() {
  localStorage.clear();
  logs.length = 0;
  $history.innerHTML = "";
}
