// API KEY
var APIKey = "5acf52002dc0d24c5d94eabd6ebffa10";

// Here we are building the URL we need to query the current weather database for different cities
var currentWeatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIKey

// Here we are building the URL we need to query the 5 day weather forecast database for different cities
var fivedayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIKey