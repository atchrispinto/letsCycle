import React from "react";

const Wind = ({ wind }) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  let val = Math.floor(wind.deg / 22.5 + 0.5);

  return (
    <div className="wind">
      <h2>Current Wind</h2>
      <svg
        className="wind-compass"
        viewBox="0 0 65 93"
        style={{ transform: `rotate(${wind.deg}deg)` }}
      >
        <g fill="#535e12" fillRule="evenodd">
          <path d="M32.5,93 C50.449254,93 65,78.449254 65,60.5 C65,42.550746 53.217448,40.411458 32.5,0.296875 C11.818758,40.358154 0,42.550746 0,60.5 C0,78.449254 14.550746,93 32.5,93 Z M32.5,72 C38.851275,72 44,66.851275 44,60.5 C44,54.148725 38.851275,49 32.5,49 C26.148725,49 21,54.148725 21,60.5 C21,66.851275 26.148725,72 32.5,72 Z"></path>
        </g>
      </svg>
      <div className="windDir">{`${wind.speed} MTR/S ${
        directions[val % 16]
      }`}</div>
    </div>
  );
};

export default Wind;
