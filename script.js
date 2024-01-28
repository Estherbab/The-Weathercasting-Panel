// Add your own API key between the ""
var APIKey = "5acf52002dc0d24c5d94eabd6ebffa10";

// Here we are building the URL we need to query the database
var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIKey

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

    // // Transfer content to HTML
    // $(".city").html("<h5>" + data.name + " Weather Details</h5>");
    // $(".wind").text("Wind Speed: " + data.wind.speed);
    // $(".humidity").text("Humidity: " + data.main.humidity);

    // // convert the temp to Celsius
    // var tempC = data.main.temp - 273.15;

    // // add temp content to html
    // $(".temp").text("Temperature (K) " + data.main.temp);
    // $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

    // // log the data in the console as well
    // console.log("Wind Speed: " + data.wind.speed);
    // console.log("Humidity: " + data.main.humidity);
    // console.log("Temperature (C): " + tempC);

    // // Create CODE HERE to Log the queryURL
    // // Create CODE HERE to log the resulting object
    // // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // // Create CODE HERE to transfer content to HTML
    // // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // // Create CODE HERE to dump the temperature content into HTML

  });


[
   {
      "name":"London",
      "local_names":{
         "ms":"London",
         "gu":"લંડન",
         "is":"London",
         "wa":"Londe",
         "mg":"Lôndôna",
         "gl":"Londres",
         "om":"Landan",
         "ku":"London",
         "tw":"London",
         "mk":"Лондон",
         "ee":"London",
         "fj":"Lodoni",
         "gd":"Lunnainn",
         "ky":"Лондон",
         "yo":"Lọndọnu",
         "zu":"ILondon",
         "bg":"Лондон",
         "tk":"London",
         "co":"Londra",
         "sh":"London",
         "de":"London",
         "kl":"London",
         "bi":"London",
         "km":"ឡុងដ៍",
         "lt":"Londonas",
         "fi":"Lontoo",
         "fy":"Londen",
         "ba":"Лондон",
         "sc":"Londra",
         "feature_name":"London",
         "ja":"ロンドン",
         "am":"ለንደን",
         "sk":"Londýn",
         "mr":"लंडन",
         "es":"Londres",
         "sq":"Londra",
         "te":"లండన్",
         "br":"Londrez",
         "uz":"London",
         "da":"London",
         "sw":"London",
         "fa":"لندن",
         "sr":"Лондон",
         "cu":"Лондонъ",
         "ln":"Lóndɛlɛ",
         "na":"London",
         "wo":"Londar",
         "ig":"London",
         "to":"Lonitoni",
         "ta":"இலண்டன்",
         "mt":"Londra",
         "ar":"لندن",
         "su":"London",
         "ab":"Лондон",
         "ps":"لندن",
         "bm":"London",
         "mi":"Rānana",
         "kn":"ಲಂಡನ್",
         "kv":"Лондон",
         "os":"Лондон",
         "bn":"লন্ডন",
         "li":"Londe",
         "vi":"Luân Đôn",
         "zh":"伦敦",
         "eo":"Londono",
         "ha":"Landan",
         "tt":"Лондон",
         "lb":"London",
         "ce":"Лондон",
         "hu":"London",
         "it":"Londra",
         "tl":"Londres",
         "pl":"Londyn",
         "sm":"Lonetona",
         "en":"London",
         "vo":"London",
         "el":"Λονδίνο",
         "sn":"London",
         "fr":"Londres",
         "cs":"Londýn",
         "io":"London",
         "hi":"लंदन",
         "et":"London",
         "pa":"ਲੰਡਨ",
         "av":"Лондон",
         "ko":"런던",
         "bh":"लंदन",
         "yi":"לאנדאן",
         "sa":"लन्डन्",
         "sl":"London",
         "hr":"London",
         "si":"ලන්ඩන්",
         "so":"London",
         "gn":"Lóndyre",
         "ay":"London",
         "se":"London",
         "sd":"لنڊن",
         "af":"Londen",
         "ga":"Londain",
         "or":"ଲଣ୍ଡନ",
         "ia":"London",
         "ie":"London",
         "ug":"لوندۇن",
         "nl":"Londen",
         "gv":"Lunnin",
         "qu":"London",
         "be":"Лондан",
         "an":"Londres",
         "fo":"London",
         "hy":"Լոնդոն",
         "nv":"Tooh Dineʼé Bikin Haalʼá",
         "bo":"ལོན་ཊོན།",
         "ascii":"London",
         "id":"London",
         "lv":"Londona",
         "ca":"Londres",
         "no":"London",
         "nn":"London",
         "ml":"ലണ്ടൻ",
         "my":"လန်ဒန်မြို့",
         "ne":"लन्डन",
         "he":"לונדון",
         "cy":"Llundain",
         "lo":"ລອນດອນ",
         "jv":"London",
         "sv":"London",
         "mn":"Лондон",
         "tg":"Лондон",
         "kw":"Loundres",
         "cv":"Лондон",
         "az":"London",
         "oc":"Londres",
         "th":"ลอนดอน",
         "ru":"Лондон",
         "ny":"London",
         "bs":"London",
         "st":"London",
         "ro":"Londra",
         "rm":"Londra",
         "ff":"London",
         "kk":"Лондон",
         "uk":"Лондон",
         "pt":"Londres",
         "tr":"Londra",
         "eu":"Londres",
         "ht":"Lonn",
         "ka":"ლონდონი",
         "ur":"علاقہ لندن"
      },
      "lat":51.5073219,
      "lon":-0.1276474,
      "country":"GB",
      "state":"England"
   },
   {
      "name":"City of London",
      "local_names":{
         "es":"City de Londres",
         "ru":"Сити",
         "ur":"لندن شہر",
         "zh":"倫敦市",
         "en":"City of London",
         "pt":"Cidade de Londres",
         "fr":"Cité de Londres",
         "uk":"Лондонське Сіті",
         "he":"הסיטי של לונדון",
         "hi":"सिटी ऑफ़ लंदन",
         "ko":"시티 오브 런던",
         "lt":"Londono Sitis"
      },
      "lat":51.5156177,
      "lon":-0.0919983,
      "country":"GB",
      "state":"England"
   },
   {
      "name":"London",
      "local_names":{
         "el":"Λόντον",
         "fr":"London",
         "oj":"Baketigweyaang",
         "en":"London",
         "bn":"লন্ডন",
         "be":"Лондан",
         "ko":"런던",
         "he":"לונדון",
         "ru":"Лондон",
         "lt":"Londonas",
         "hy":"Լոնտոն",
         "ga":"Londain",
         "ja":"ロンドン",
         "yi":"לאנדאן",
         "cr":"ᓬᐊᐣᑕᐣ",
         "iu":"ᓚᓐᑕᓐ",
         "ar":"لندن",
         "lv":"Landona",
         "fa":"لندن",
         "ug":"لوندۇن",
         "th":"ลอนดอน",
         "ka":"ლონდონი"
      },
      "lat":42.9832406,
      "lon":-81.243372,
      "country":"CA",
      "state":"Ontario"
   },
   {
      "name":"Chelsea",
      "local_names":{
         "id":"Chelsea, London",
         "uk":"Челсі",
         "hi":"चेल्सी, लंदन",
         "ga":"Chelsea",
         "es":"Chelsea",
         "de":"Chelsea",
         "af":"Chelsea, Londen",
         "vi":"Chelsea, Luân Đôn",
         "pl":"Chelsea",
         "pt":"Chelsea",
         "da":"Chelsea",
         "ko":"첼시",
         "sv":"Chelsea, London",
         "nl":"Chelsea",
         "az":"Çelsi",
         "it":"Chelsea",
         "hu":"Chelsea",
         "no":"Chelsea",
         "fr":"Chelsea",
         "he":"צ'לסי",
         "eu":"Chelsea",
         "ru":"Челси",
         "ar":"تشيلسي",
         "en":"Chelsea",
         "el":"Τσέλσι",
         "tr":"Chelsea, Londra",
         "zh":"車路士",
         "sh":"Chelsea, London",
         "ja":"チェルシー",
         "ur":"چیلسی، لندن",
         "sk":"Chelsea",
         "fa":"چلسی",
         "et":"Chelsea"
      },
      "lat":51.4875167,
      "lon":-0.1687007,
      "country":"GB",
      "state":"England"
   },
   {
      "name":"London",
      "lat":37.1289771,
      "lon":-84.0832646,
      "country":"US",
      "state":"Kentucky"
   }
]
