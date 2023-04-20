import "./piechart.css";
import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");

const PieChart = () => {
    const total_budget = 1000;
    const spendings = ["food", "entertainment", "rent"];
    const spendings_cost = [30, 40, 30];
  
    const data = {
      labels: spendings,
      datasets: [
        {
          data: spendings_cost,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  
    const options = {
      legend: {
        labels: {
          fontColor: "pink"
        }
      }
    };
  
    return (
      <div className="body">
        <div className="dashboard-home-screen">
          <img className="top-bar-icon" alt="" src={img2} />
          <img className="bg-01-1-icon" alt="" src={img3} />
          <div className="dashboard-home-screen-child" />
          <b className="home">Budget Chart</b>
          <div className="chart-container">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    );
  };
  

export default PieChart;