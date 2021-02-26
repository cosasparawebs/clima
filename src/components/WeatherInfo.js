import React from 'react';

const WeatherInfo = ({ temperature, description, humidith, windSpeed, city, country, error }) => {

    console.log(city)
    return(
            <>
                {error ? <div className="alert alert-danger">{error}</div> : 
                <div className="card card-body">
                    <p>Location: {city}, {country}</p>
                    <p>Temperature: {temperature}, {description}</p>
                    <p>Humidity: {humidith}</p>
                    <p>Wind: {windSpeed}</p>
                </div>} 
            </>
    )
}

export default WeatherInfo;

