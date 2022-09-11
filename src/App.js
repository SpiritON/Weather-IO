import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherResult from "./components/WeatherResult/WeatherResult";
import GetWeatherRes from "./api/GetWeatherRes";
import NavBar from "./components/NavBar/NavBar";
import WeatherFooter from "./components/WeatherFooter/WeatherFooter";
import { Box } from "@mui/system";


    function App() {

    const {weatherData, getWeather, loading, error} = GetWeatherRes()

    return (
        <Box sx={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>  
                <NavBar/>
                <WeatherForm onSubmit={getWeather}/>
                {weatherData && <WeatherResult data={weatherData}/>}
                    <Box sx={{
                        display: 'flex',
                        margin: '0 auto'
                        }}>
                        {loading && <p>Loading...</p>}
                        {error && <p>Can't getting data from server</p>}
                    </Box>
                <WeatherFooter/>
        </Box>
    )
}

export default App
