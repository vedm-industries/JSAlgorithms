/**
 * Weather App
 */

// API_KEY for weather api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      console.log(response)
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("city-input").value = "";
};

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("weather-description").innerText =
    weatherData.weather[0].description;
  document.getElementById("temp").innerText = Math.round(weatherData.main.temp);
  document.getElementById("min-temp").innerText = Math.round(
    weatherData.main.temp_min
  );
  document.getElementById("max-temp").innerText = Math.round(
    weatherData.main.temp_max
  );
  document.getElementById("feels-like").innerText = Math.round(
    weatherData.main.feels_like
  );
  document.getElementById("wind-speed").innerText = weatherData.wind.speed;
};
