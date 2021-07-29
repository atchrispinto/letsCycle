import React, { useState } from "react";
import Chart from "./components/Chart.jsx";
import Time from "./components/Time.jsx";
import Weather from "./components/Weather.jsx";
import Wind from "./components/Wind.jsx";
import "./App.scss";

function App() {
  const [tide, setTide] = useState();
  const [weather, setWeather] = useState();

  const time = new Date();
  const year = time.getFullYear();
  const day = `${time.getDate()}`.padStart(2, 0);
  const month = `${time.getMonth() + 1}`.padStart(2, 0);

  const handleClick = async () => {
    try {
      const { coords } = await new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const lat = coords.latitude;
      const long = coords.longitude;

      console.log(lat, long);

      const response1 = await fetch(
        `https://api.12openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7797f19d8e620a623448b1a631d4c946&units=metric`
      );
      const data1 = await response1.json();
      setWeather(data1);

      const response2 = await fetch(
        `https://api.12stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${long}&start=${year}-${month}-${day}`,
        {
          headers: {
            Authorization:
              "16b72906-b722-11eb-849d-0242ac130002-16b72988-b722-11eb-849d-0242ac130002",
          },
        }
      );
      const data2 = await response2.json();
      setTide(data2.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>
          Let's Cycle<span className="">!</span>
        </h1>
        <p>A Tide App</p>
      </header>

      {!weather ? <button onClick={handleClick}>Get Tide Data</button> : ""}

      {weather && (
        <div className="container">
          <Time time={time} />
          {tide && <Chart tide={tide} />}
          <div className="weather-conatiner">
            <Weather weather={weather} />
            <Wind wind={weather.wind} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
