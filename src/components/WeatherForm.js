import React from 'react';

const WeatherForm = ({getWeather}) => {

    return(
        <div className="card card-body">
            <form onSubmit={getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus/>
                </div>

                <div className="form-group">
                    <input type="text" name="country" placeholder="Your country name" className="form-control"/>
                </div>

                <button className="btn btn-success btn-block">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm;