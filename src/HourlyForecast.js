import React from 'react';

const HourlyForecast = ({ time, icon, temperature }) => {
    return (
        <div className="hourly-container">
            <div className="hourly-content">
                <p className="hourly-time">{time}</p>
                <img
              src={icon}
              className="logo_svg"
              alt="weather icon"
            />
                <p className="hourly-temperature">{temperature}&#176;C</p>
            </div>
        </div>
    );
}

export default HourlyForecast;
