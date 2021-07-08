import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  return (
    <div className="chart">
      <Line
        // data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Chart;
