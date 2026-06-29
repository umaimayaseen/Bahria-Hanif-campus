function checkWeather() {
    let cityName = document.getElementById("city").value;
    let myApiKey = "9212fe3ab87a4c9abaf45210241802"
    let url = "http://api.weatherapi.com/v1/current.json?key=" + myApiKey + "&q=" + cityName;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (dataBox) {
            document.getElementById("showCity").innerHTML = dataBox.location.name;
            document.getElementById("showCountry").innerHTML = dataBox.location.country;
            document.getElementById("showTemp").innerHTML = dataBox.current.temp_c + " °C";
            document.getElementById("showStatus").innerHTML = dataBox.current.condition.text;
        })
}