
// These code author by Dandan ZHAO

const apiKey = 'c8725c99582e6b7913b5136a66b58338';
const city = 'new york';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Fetch the weather data from the OpenWeatherMap API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp - 273.15);
    const weather = data.weather[0].main;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Display the weather data on the webpage
    document.getElementById('temp').innerHTML = `${temp}°C`;
    document.getElementById('weather').innerHTML = `${weather} - ${weatherDescription}`;
    document.getElementById('icon').src = weatherIcon;
  })
  .catch(error => console.log(error));

// When the "Play Music" button is clicked, use the Spotify Web API to play music based on the weather
const playButton = document.getElementById('play-music');
playButton.addEventListener('click', () => {
  const spotifyApiKey = '9a9643ecc0aa417582f0af96a6736da8';
  const spotifyApiSecret = '6704e1d5f37e40f988186ce24b9f94b4';
});
