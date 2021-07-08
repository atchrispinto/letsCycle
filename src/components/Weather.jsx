import React from "react";

const Weather = () => {
  return (
    <div>
      <h2>Current Weather</h2>
      <div className="tempSec">
        <h3 className="tempDeg">
          Temperature in<span>°C</span>
        </h3>
      </div>
      <div className="tempDes">Description</div>
    </div>
  );
};

export default Weather;
