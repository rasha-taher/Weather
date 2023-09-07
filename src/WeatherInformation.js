import React from 'react';
function WeatherInformation() {
    return (
      <div className="more_information">
        <div>
          <div className="main_more">
            <p className="more_title">Time</p>
            <p className="more_time" id="time">2:29am</p>
          </div>
          <div className="main_more">
            <p className="more_title">Humidity</p>
            <p className="more_humidity">65%</p>
          </div>
        </div>
        <div>
          <div className="main_more">
            <p className="more_title">Pressure</p>
            <p className="more_pressure">65%</p>
          </div>
          <div className="main_more">
            <p className="more_title">Wind</p>
            <p className="more_pressure">20 km/h</p>
          </div>
        </div>
      </div>
    );
  } 
  export default WeatherInformation;