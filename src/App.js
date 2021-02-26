import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import {WEATHER_KEY} from './keys.js';

function App() {

  const [temperature, setTemperature] = useState('')
  const [description, setDescription] = useState('')
  const [humidith, setHumidity] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(null)


  const getWeather = async (e) =>{
    e.preventDefault()
    const {city, country} = e.target.elements
    const cityValue = city.value;
    const countryValue = country.value;

    if(cityValue && countryValue){
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
  
      setTemperature(data.main.temp)
      setDescription(data.weather.description)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
      setCity(data.name)
      setCountry(data.sys.country)
      setError(null)
    } else {
      setError('Please enter a city and country name')
    }

  }

  return (
    <div className="App container p-4">
        <div className="row">
            <div className="col-md-6 mx-auto">
              <WeatherForm getWeather={getWeather}/>
              <WeatherInfo 
              temperature={temperature}
              description={description}
              humidith={humidith}
              windSpeed={windSpeed}
              city={city}
              country={country}
              error={error}
              />
            </div>
        </div>
    </div>
  );
}

export default App;
