import React from 'react';

const WeatherInformation =({ feelslike, humidity, pressure, wind })=> {
    return (
      <div className="more_information">
        <div>
          <div className="main_more">
            <p className="more_title">Feels Like</p>
            <p className="more_feels-like" id="feels-like">{feelslike}  &#176;C</p>
          </div>
          <div className="main_more">
            <p className="more_title">Humidity</p>
            <p className="more_humidity">{humidity} %</p>
          </div>
        </div>
        <div>
          <div className="main_more">
            <p className="more_title">Pressure</p>
            <p className="more_pressure">{pressure} mb</p>
          </div>
          <div className="main_more">
            <p className="more_title">Wind</p>
            <p className="more_wind">{wind} km/h</p>
          </div>
        </div>
      </div>
    );
  } 
  export default WeatherInformation;