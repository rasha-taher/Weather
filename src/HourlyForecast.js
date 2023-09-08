import React from 'react';
import partlyCloudy from './weather-icons/partlycloudy.svg'

const HourlyForecast = ({ time, icon, temperature }) => {
    return (
        <div className="hourly-container">
            <div className="hourly-content">
                <p className="hourly-time">{time}</p>
                <img className="hourly-icons" src={icon} alt="" />
                <p className="hourly-temperature">{temperature}&#176;C</p>
            </div>
        </div>
    );
}

export default HourlyForecast;
