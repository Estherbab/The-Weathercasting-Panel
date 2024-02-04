// API KEY for OpenWeatherMap API
var APIKey = "5acf52002dc0d24c5d94eabd6ebffa10";

// Here we are building the URL we need to query the current weather database for different cities
var currentWeatherURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" +
  APIKey;

// Here we are building the URL we need to query the 5 day weather forecast database for different cities
var fivedayForecastURL =
  "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" +
  APIKey;

// Declaring the variables for the user input in the (Document Object Model) elements
var searchCity = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");
var form = document.getElementById("search-form");

// Declaring the variables for the current weather data card in the DOM elements
var currentWeather = document.getElementById("weather-today");
var cityName = document.getElementById("city-name");
var todaysDate = document.querySelector(".current-date");
var weatherIcon = document.querySelector(".weather-icon");
var temperature = document.querySelector(".temperature");
var windSpeed = document.querySelector(".wind-speed");
var humidity = document.querySelector(".humidity");
var todayContainer = document.getElementById("today");

// Declaring the variables for the 5 day weather forecast cards in the DOM elements
var forecastcardBody = document.querySelectorAll(".card-body");
var forecastcardDate = document.querySelectorAll(".fivedate");
var forecastcardIcon = document.querySelectorAll(".fiveicon");
var forecastcardTemperature = document.querySelectorAll(".fivetemperature");
var forecastcardWind = document.querySelectorAll(".fivewind");
var forecastcardHumidity = document.querySelectorAll(".fivehumidity");
var searchhistoryLocal = JSON.parse(localStorage.getItem("cityHistory")) || [];


const getweatherDetails = (cityInput, lat, lon) => {
  const weatherAPIURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey +
    "&units=metric";

  fetch(weatherAPIURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityName.textContent = data.name;
      temperature.textContent = "Tempereature : " + data.main.temp + "°C";
      todaysDate.textContent = new Date(data.dt * 1000).toLocaleDateString(); // Javascript date format that goes into local storage & collects the date x 1000 so that its in the correct format
      humidity.textContent = "Humidity : " + data.main.humidity + "%";
      windSpeed.textContent = "Wind Speed : " + data.wind.speed + "m/s";
    })
    .catch(() => {
      alert("error occured while fetching the weather forecast!");
    });
};

const getCityCoordinates = (cityInput) => {
  // event.preventDefault()
  // const cityInput = searchCity.value.trim(); //Get user to enter the city name with no extra spaces
  // if (!cityInput) return; // return if city name is empty
  const geocodingAPIURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityInput +
    "&limit=5&appid=" +
    APIKey;

  fetch(geocodingAPIURL)
    .then((res) => res.json())
    .then((data) => {
      if (!data.length) return alert(`No coordinates found for ${cityInput}`);
      console.log(data);
      const { name, lat, lon } = data[0];
      if (!searchhistoryLocal.includes(name)) {
        const cityNameEl = document.createElement("h2");
        cityNameEl.onclick = previousCity;
        cityNameEl.textContent = name;
        todayContainer.append(cityNameEl);
        searchhistoryLocal.push(name);
        localStorage.setItem("cityHistory", JSON.stringify(searchhistoryLocal));
      }

      getweatherDetails(name, lat, lon);
      getForecast(name);
      console.log(name, lat, lon);
      console.log(data[0]);
    })
    .catch(() => {
      alert("An error occured while fetching the coodinates!!!");
    });

  console.log(cityInput);
};

function getForecast(cityInput) {
  console.log(cityInput);

  let getForecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    "&units=metric" +
    "&appid=" +
    APIKey;

  fetch(getForecastURL)
    .then((res) => res.json())
    .then((data) => {
    displayForecast(data)
    });

}

function displayForecast(forecastData) {
console.log(forecastData.list)
for (let i = 4; i < 37; i+=8) {
console.log(forecastData.list[i])


  
}
}


function previousCity() {
  console.log(this);
  getCityCoordinates(this.textContent);
}
function handleformSubmit(event) {
  event.preventDefault();
  const cityInput = searchCity.value.trim(); //Get user to enter the city name with no extra spaces
  if (!cityInput) return; // return if city name is empty
  getCityCoordinates(cityInput);
}

form.addEventListener("submit", handleformSubmit);

//https://api.openweathermap.org/data/2.5/forecast?q=

// // Created a Fetch Call for the Current Weather URL
// fetch(currentWeatherURL)
//   .then(function (response) {
//      // Calling .json() to access the json data stored inside the returned promise
//     return response.json();
//   })
//    // We store all of the retrieved data inside of an object called "data"
//   .then(function (data) {

//     // Log the currenWeatherURL
//     console.log(currentWeatherURL);

//     // // Create CODE HERE to Log the queryURL
//     // // Create CODE HERE to log the resulting object
//     // // Create CODE HERE to calculate the temperature (converted from Kelvin)
//     // // Create CODE HERE to transfer content to HTML
//     // // Hint: To convert from Kelvin to Celsius: C = K - 273.15
//     // // Create CODE HERE to dump the temperature content into HTML

//   });
