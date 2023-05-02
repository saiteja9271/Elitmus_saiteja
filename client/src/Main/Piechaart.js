import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const Piechaart = () => {
  const labels = ["users not played", "users played"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "User data",
      backgroundColor: ["rgb(255, 99, 152)","rgb(210, 199, 13)"],
      borderColor: "rgb(255,255,255)",
      color:"#fff",
      data: [10, 5],
    },
  ],
};
  return (
    <div style={{width:"200px",color:"black"}}>
      <Pie data={data} />
 
    </div>
  )
}

export default Piechaart
