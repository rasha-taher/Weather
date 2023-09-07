import React from 'react';
import Header from './header.js';
import Search from './search.js';
import HourlyForecast from './HourlyForecast.js';


function App() {
  return (
    <div className="App">

      <Search />
      <Header />
      <div className="hourly-forecast">
        <h2 className="hourly-h2">Hourly Forecast</h2>
        <div className="hourly-grid">
          <div className="extra">
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
