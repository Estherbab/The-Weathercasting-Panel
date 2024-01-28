// API KEY
var APIKey = "5acf52002dc0d24c5d94eabd6ebffa10";

// Here we are building the URL we need to query the current weather database for different cities
var currentWeatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIKey

// Here we are building the URL we need to query the 5 day weather forecast database for different cities
var fivedayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIKey


// Declaring the variables for the user input in the (Document Object Model) elements
var searchCity = document.getElementById("search-form")
var searchBtn = document.getElementById("search-button")

// Declaring the variables for the current weather data card in the DOM elements
var currentWeather = document.getElementById("weather-today")
var cityName = document.getElementById("city-name")
var todaysDate = document.querySelector(".current-date")
var weatherIcon = document.querySelector(".weather-icon")
var temperature = document.querySelector(".temperature")
var windSpeed = document.querySelector(".wind-speed")
var humidity = document.querySelector(".humidity")