import React from 'react';
import unknown from './weather-icons/unknown.svg'
const Content = () => {
  return (
    
      <div className="main">
        <p className="main_title" id="country">
          City Name
        </p>
        <img src={unknown} className="main_svg" alt="weather icon" />
        <div className="main_info">
          <div className="main_day" id="date">
            Sunday
          </div>
          <p className="main_visibility">Cloudy</p>
          <p className="main_temperature">22 &#176;C</p>
        </div>
      </div>
   
  );
}

export default Content;
