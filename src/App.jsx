// import React, { useState, useEffect } from "react";
import Chart from "./components/Chart.jsx";
import Time from "./components/Time.jsx";
import Weather from "./components/Weather.jsx";
import Wind from "./components/Wind.jsx";
// import axios from "axios";
import "./App.scss";

function App() {
  // const [tide, setTide] = useState();
  // const [weather, setWeather] = useState();

  // useEffect(() => {
  // axios
  //   .get(
  //     "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7797f19d8e620a623448b1a631d4c946&units=metric"
  //   )
  //   .then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const handleClick = () => {};

  return (
    <div className="app">
      <header>
        <h1>
          Let's Cycle<span className="">!</span>
        </h1>
        <p>A Tide App</p>
      </header>
      <button onClick={handleClick}>Get Tide Data</button>
      <div className="container">
        <Time />
        <Chart />
        <div className="weather-conatiner">
          <Weather />
          <Wind />
        </div>
      </div>
    </div>
  );
}

export default App;
