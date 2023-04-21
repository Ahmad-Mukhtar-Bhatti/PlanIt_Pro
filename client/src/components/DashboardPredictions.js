import "./DashboardPredictions.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserID } from "../hooks/useGetUserID.js";
import { useEffect, useState } from "react";
import axios from "axios";
import graphImg from "./home/graph.png";


const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");
// const img = require("./home/graph.png");

const myDict = {};

const PieChart = () => {
  const userID = getUserID();
  const [length, setLength] = useState(0);

  useEffect(() => {
    const getdata = async (userID) => {
      console.log("The form was submitted with the following data:");
      console.log(userID);

      try {
        const response = await axios.post("http://localhost:3010/getPredictions", {
          userID,
        });

        // console.log(response);
        const msg = response.data.message;
        setLength(response.data.message.length);
        for (let i = 0; i < msg.length; i++) {
          let item = msg[i];

          if (item.Type === "debit") {
            const opt = item.Option;
            if (!(opt in myDict)) {
              myDict[opt] = item.amount;
            } else {
              myDict[opt] += item.amount;
            }
          }
        }
        // console.log(myDict);
      } catch (error) {
        console.log("An error occurred", error);
      }
    };

    getdata(userID);
  }, []);

  for (const key in myDict) {
    console.log(`${key}: ${myDict[key]}`);
  }
  
  const spendings = Object.keys(myDict);
  const spendings_cost = Object.values(myDict);
  
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
        <b className="home">Get Predictions</b>
        {/* <img>{img}</img> */}
        <div className="chart-container">
        <img src={graphImg} />
        </div>


        <div className="predictions-convert">
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
