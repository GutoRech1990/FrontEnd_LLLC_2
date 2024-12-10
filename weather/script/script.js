var url = "http://api.openweathermap.org/data/2.5/weather?q=XXXXXX&appid=f0eb99d5d978be0f60c18814625bc822&units=metric";

function setLuxembourgWeather(){
    var city = document.getElementById("city").value = "Luxembourg";
    getWeather();
}

async function getWeather() {
    var city = document.getElementById("city").value;
    var currentUrl = url.replace("XXXXXX", city);

    //console.log(currentUrl);

    result = await fetch(currentUrl);

    if(result.ok == false){
        alert("Unknown City");
        return;
    }

    weatherObject = await result.json();

    console.log(weatherObject);

    temperature = weatherObject.main.temp;
    pressure = weatherObject.main.pressure;
    humidity = weatherObject.main.humidity;
    icon = weatherObject.weather[0].icon;
    cityName = weatherObject.name;
    country = weatherObject.sys.country;

    var out = document.getElementById("output");
    var outString = "";

    outString += "<div id='weather'>";
    outString += "<div class='line'><span>Weather for </span> " + cityName + " in " + country + "</div>";
    outString += "<div class='line'><span>Temperature </span> " + temperature + " C</div>";
    outString += "<div class='line'><span>Pressure </span>" + pressure + " hP </div>";
    outString += "<div class='line'><span>Humidity </span>" + humidity + " % </div>";
    outString += "<div class='line'><img src='https://openweathermap.org/img/wn/" + icon + "@2x.png'></div>";
    outString += "</div>";

    out.innerHTML = outString;

}