import React from "react";

const Time = () => {
  const time = new Date();
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className="time">
      <h2 className="hours">{`${time.getHours()}`.padStart(2, 0)}</h2>
      <h2 className="minutes">{`${time.getMinutes()}`.padStart(2, 0)}</h2>
      <h4 className="date">
        {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}
      </h4>
    </div>
  );
};

export default Time;
