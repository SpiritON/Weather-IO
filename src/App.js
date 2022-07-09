import './App.css';
import {useState} from "react";
import InfoHeader from "./components/WeatherItem/Info";
import WeatherForm from "./components/WeatherItem/WeatherForm";
import WeatherResult from "./components/WeatherItem/WeatherResult";


const API_KEY = '9681983f6c4741e6bda182319220307'

function App() {
    const [weatherData, setWeatherData] = useState('')
    const gettingWeather = async (event) => {
        event.preventDefault()
        const city = event.target.elements.city.value
        try {
        const api_url = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        const data = await api_url.json()

                setWeatherData({
                    country: data.location.country,
                    city: data.location.name,
                    region: data.location.region,
                    temp: data.current.temp_c,
                    feelslike: data.current.feelslike_c,
                    wind: data.current.wind_kph,
                    condition: data.current.condition.text
            })
        }
        catch (err) {
            alert(' Cant get request from server ')
        }


    }


    return (
        <>
            <InfoHeader/>
            <WeatherForm onSubmit={gettingWeather}/>
            {weatherData.country ? (<WeatherResult data={weatherData}/>)
            : (<div></div>)}


        </>
    )
}

export default App
