import {useState} from "react";
import {Service} from "./Service";

function GetWeatherRes() {
    const [weatherData, setWeatherData] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const getWeather = async (value) => {
        setLoading(true)
        setWeatherData(false)
        setError(false)
        try {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${Service.ApiWeatherKey}&q=${value}&days=5&aqi=no&alerts=no`)
            .then(res => res.json())
            setLoading(false)
        setWeatherData({

            country: res.location.country,
            city: res.location.name,
            region: res.location.region,
            temp: res.current.temp_c,
            feelslike: res.current.feelslike_c,
            wind: res.current.wind_kph,
            condition: res.current.condition.text,
            conditionIcon: res.current.condition.icon,
            time: res.location.localtime,
            pressure: res.current.pressure_mb,
            windDir: res.current.wind_dir   
        })
        }
        catch (err) {
            setError(true)
        }

    }

    return {weatherData, getWeather, loading, error}
}

export default GetWeatherRes