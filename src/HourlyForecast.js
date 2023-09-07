import React from 'react';

const HourlyForecast = () => {
    return (
        <div className="hourly-container">
            <div className="hourly-content">
                <p className="hourly-time">00:00</p>
                <img className="hourly-icons" src="./weather-icons/fog.svg" alt="" />
                <p className="hourly-temperature">18&#176;C</p>
            </div>
        </div>
    );
}

export default HourlyForecast;
