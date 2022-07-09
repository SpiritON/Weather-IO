import React from "react";

function WeatherResult(weatherData) {



    return (
        <div>
            <form>
                <li>Country: {weatherData.data.country}</li>
                <li>Location: {weatherData.data.city}</li>
                <li>Region: {weatherData.data.region}</li>
                <li>Temperature: {weatherData.data.temp}℃</li>
                <li>Wind speed: {weatherData.data.wind}Km/H</li>
                <li>Realfeel: {weatherData.data.feelslike}℃</li>
                <li>Probability of precipitation: {weatherData.data.condition}</li>
            </form>
        </div>
    )

}

export default WeatherResult