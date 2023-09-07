import React from 'react';
import partlyCloudy from './weather-icons/partlycloudy.svg'

const HourlyForecast = () => {
    return (
        <div className="hourly-container">
            <div className="hourly-content">
                <p className="hourly-time">00:00</p>
                <img className="hourly-icons" src={partlyCloudy} alt="" />
                <p className="hourly-temperature">18&#176;C</p>
            </div>
        </div>
    );
}

export default HourlyForecast;
