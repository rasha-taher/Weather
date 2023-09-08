import React from "react";
import HourlyForecast from "./HourlyForecast.js";
import WeatherInformation from "./WeatherInformation.js";
import unknown from "./weather-icons/unknown.svg";
import partlyCloudy from "./weather-icons/partlycloudy.svg";
import { useState } from "react";
import clear from "./weather-icons/clear.svg";
import cloudy from "./weather-icons/cloudy.svg";
import drizzle from "./weather-icons/drizzle.svg";
import fog from "./weather-icons/fog.svg";
import mostlycloudy from "./weather-icons/mostlycloudy.svg";
import rain from "./weather-icons/rain.svg";
import snow from "./weather-icons/snow.svg";
import storm from "./weather-icons/storm.svg";

const api = {
  key: "b3b3d26caa5c057ee0ae12c8707572e4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  let i = "";
  function images(i) {
    switch (i) {
      case "Clear":
        return clear;

      case "Clouds":
        return cloudy;

      case "Rain":
        return rain;

      case "Storm":
        return storm;

      case "Fog":
        return fog;

      default:
        return unknown;
    }
  }
  return (
    <div className="App">
      <header>
        <form className="searching_form">
          <img src={clear} className="logo_svg" />
          <input
            type="text"
            className="searching_box"
            placeholder="Type a city here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="submit_btn" onClick={searchPressed}>
            Search
          </button>
        </form>
      </header>
      <hr className="line" />
      <div class="container">
        {typeof weather.main !== "undefined" ? (
          <div className="main">
            <p className="main_title" id="country">
              {weather.name}
            </p>
            <img
              src={images(weather.weather[0].main)}
              className="main_svg"
              alt="weather icon"
            />
            <div className="main_info">
              <div className="main_day" id="date">
                {dateBuilder(new Date())}
              </div>
              <p className="main_visibity"> {weather.weather[0].main}</p>
              <p className="main_temperature">{weather.main.temp} &#176;C</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="main">
              <p className="main_title" id="country">
                Loading...
              </p>
              <img src={unknown} className="main_svg" alt="weather icon" />
              <div className="main_info">
                <div className="main_day" id="date">
                  Date
                </div>
                <p className="main_visibility">Visibility</p>
                <p className="main_temperature">Degree</p>
              </div>
            </div>
            <div className="hourly-forecast">
              <h2 className="hourly-h2">Hourly Forecast</h2>
              <div className="hourly-grid">
                {/* Your Hourly Forecast components go here */}
              </div>
            </div>
          </div>
        )}
        ;
        {typeof weather.main !== "undefined" ? (
          <WeatherInformation
            feelslike={weather.main.feels_like}
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
            wind={weather.wind.speed}
          />
        ) : (
          ""
        )}
      </div>
      {console.log(weather.main)}
      {typeof weather.main !== "undefined" ? (
        <div className="hourly-forecast">
          <h2 className="hourly-h2">Hourly Forecast</h2>
          <div className="hourly-grid">
            <div className="extra">
              {console.log("object ", weather)}
              {weather &&
                weather.weather &&
                // weather.list &&
                //.list.slice(0, 8)
                weather.weather.map((forecast, index) => (
                  <div className="hourly-container">
                    <div className="hourly-content">
                      <p className="hourly-time"> {'dtime'}</p>
                      <img
                        className="hourly-icons"
                        src={images(forecast.main)}
                        alt=""
                      />
                      <p className="hourly-temperature">
                        {forecast.main.temp}&#176;C
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      ;
    </div>
  );
}

export default App;
