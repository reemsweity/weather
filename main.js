function renderWeather(weather) {
    const resultWeather = document.querySelector('#weather-des');
   

    const city = document.createElement('h2');
    city.textContent = weather.name;
    resultWeather .append(city);

    const temp = document.createElement('p');
    temp.textContent ="Temp: " + weather.main.temp+" f"
    resultWeather .append(temp);

    const humidity = document.createElement('p');
    humidity.textContent = "Humidity: " + weather.main.humidity + "%";
    resultWeather .append(humidity);

    const wind = document.createElement('p');
    wind.textContent = "Wind: " + weather.wind.speed + " mph";
    resultWeather .append(wind);

    var weatherDetails = weather.weather[0];

    if (weatherDetails && weatherDetails.description) {
        const description = document.createElement("p");
        description.textContent =weatherDetails.description;
        resultWeather .append(description);
    }
}


function fetchWeather(query) {
    var apiKey = '60d5f278f9f0abb440eaabf4967793d5';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        .catch((error) => console.error('Error fetching weather:', error));
}

document.getElementById('btn').addEventListener('click', () => {
    const city = document.getElementById('city-name').value;
    if (city) {
        fetchWeather(city);
    } else{
        alert("plz enter city")
    }
});
