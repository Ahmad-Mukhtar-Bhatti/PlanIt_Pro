import "./DashboardPiechart.css";
import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";
import { getUserID } from "../hooks/useGetUserID.js";
import  { useEffect, useState } from "react";
import axios from "axios";


const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");

const PieChart = () => {

  const userID =  getUserID();


  useEffect(() => {

    const getdata = async (userID) => {
      console.log("The form was submitted with the following data:");
      console.log(userID);
  
      try {
        const response = await axios.post("http://localhost:3010/piechart", {userID});
  
        console.log(response)
  
      } catch (error) {
        console.log("An error occurred");
      }
    };
  
    getdata(userID)
    
  }, []);


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

    const navigate = useNavigate();

    const handleSaveChanges = () => {
      navigate("/home");
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

          <div className="piechart-convert">
            <button
              
              onClick={handleSaveChanges}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "transparent",
                fontSize: "18px",
              }}
            >
              Go Home
            </button>
        </div>

        </div>
      </div>
    );
  };
  

export default PieChart;