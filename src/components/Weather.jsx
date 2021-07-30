import React, { useState } from "react";

const Weather = ({ weather }) => {
  const temperatureCelsius = weather.main.temp.toFixed(1);
  const [unit, setUnit] = useState(true);
  const handleUnitChange = () => setUnit(!unit);
  let temperatureDegree = unit
    ? temperatureCelsius
    : Math.round(9 / 5) * temperatureCelsius + 32;
  let temperatureUnit = unit ? "°C" : "°F";

  return (
    <div onClick={handleUnitChange} className="weather">
      <h2>Current Weather</h2>
      <div className="tempSec">
        <h3 className="tempDeg">
          {temperatureDegree}
          <span>{temperatureUnit}</span>
        </h3>
      </div>
      <div className="tempDes">{weather.weather[0].main}</div>
    </div>
  );
};

export default Weather;
