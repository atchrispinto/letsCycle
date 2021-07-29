import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./Chart.module.css";

const Chart = ({ tide }) => {
  const levels = tide
    ? tide.map((el) => {
        return el.height.toFixed(1);
      })
    : "";

  const labels = tide
    ? tide.map((el) => {
        const time = new Date(el.time);
        return time.getHours() + ":" + time.getMinutes();
      })
    : "";
  console.log(labels);
  const data = {
    labels: ["", ...labels, ""],

    datasets: [
      {
        label: "",
        data: [0, ...levels, 0],
        fill: "start",
        backgroundColor: "#D7ED7E",
        borderColor: "#181818",
        lineTension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    }, //plugin
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: "white",
          z: 2,
        },
      }, //x
      y: {
        grid: { display: true, drawBorder: true, color: "white" },
      }, //y
    }, //scales
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
