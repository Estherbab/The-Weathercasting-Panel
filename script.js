// Add your own API key between the ""
var APIKey = "5acf52002dc0d24c5d94eabd6ebffa10";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + APIKey

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
     // Calling .json() to access the json data stored inside the returned promise
    return response.json();
  })
   // We store all of the retrieved data inside of an object called "data"
  .then(function (data) {

    // Log the queryURL
    console.log(queryURL);

    // Transfer content to HTML
    $(".city").html("<h5>" + data.name + " Weather Details</h5>");
    $(".wind").text("Wind Speed: " + data.wind.speed);
    $(".humidity").text("Humidity: " + data.main.humidity);

    // convert the temp to Celsius
    var tempC = data.main.temp - 273.15;

    // add temp content to html
    $(".temp").text("Temperature (K) " + data.main.temp);
    $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

    // log the data in the console as well
    console.log("Wind Speed: " + data.wind.speed);
    console.log("Humidity: " + data.main.humidity);
    console.log("Temperature (C): " + tempC);

    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // Create CODE HERE to dump the temperature content into HTML

  });



