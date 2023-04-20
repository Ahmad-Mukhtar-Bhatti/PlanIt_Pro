import "./DashboardHomeScreen.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
// import { useLocation } from 'react-router-dom';
import { getUserID } from "../hooks/useGetUserID.js";

const img = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");
const img4 = require("./home/rectangle-20@2x.png");
const img5 = require("./home/subtract1.png");
const img6 = require("./home/ellipse-65.png");
const img7 = require("./home/ellipse-66.png");
const img8 = require("./home/subtract2.png");
const img9 = require("./home/rectangle-20@2x.png");
const img11 = require("./home/iconoirreceivedollars.png");
const img12 = require("./home/iconoirsenddollars.png");
const img13 = require("./home/iconoirsenddollars.png");
const img14 = require("./home/wallet-alt.png");
const img15a = require("./home/subtract.png");

const DashboardHomeScreen = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies("access_token");

  const [name, setName] = useState("");
  const [bal, setBal] = useState("");
  const [pic, setPic] = useState("");
  const [usd, setUSD] = useState(false);

  const userID = getUserID();

  useEffect(() => {
    const getdata = async (userID) => {
      console.log("The form was submitted with the following data:");
      console.log(userID);

      try {
        const response = await axios.post("http://localhost:3010/home", {
          userID,
        });

        setName(response.data.name);
        setBal(response.data.balance);
        setPic(response.data.pic);
      } catch (error) {
        console.log("An error occurred");
      }
    };

    getdata(userID);
  }, []);

  const exchangeRateAPI = "https://api.exchangerate-api.com/v4/latest/USD";

  const convert = async (amount) => {
    try {
      if (!usd) {
        const exchangeRateResponse = await axios.get(exchangeRateAPI);
        const exchangeRate =
          exchangeRateResponse.data.rates.PKR /
          exchangeRateResponse.data.rates.USD;
        console.log(exchangeRate);
        const amountInUSD = amount / exchangeRate;
        setBal(amountInUSD.toFixed(2));
        setUSD(true);
      } else {
        const exchangeRateResponse = await axios.get(exchangeRateAPI);
        const exchangeRate =
          exchangeRateResponse.data.rates.USD /
          exchangeRateResponse.data.rates.PKR;
        const amountInPKR = amount / exchangeRate;
        setBal(amountInPKR.toFixed(2));
        setUSD(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("User_ID");
    navigate("/login");
  };

  return (
    <div className="body">
      <div className="dashboard-home-screen">
        <img className="top-bar-icon" alt="" src={img2} />
        <img className="bg-01-1-icon" alt="" src={img3} />
        <div className="dashboard-home-screen-child" />
        <b className="home">HOME</b>

        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="group-item" />
          <div className="qaboos-ali-khan">{name}</div>
          {/* <button className="convert" onClick={convert(bal)}>Convert to USD</button> */}

          {/* <div className="pkr-3578"> */}
          <div className="convert">
            <button
              
              onClick={() => convert(bal)}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "transparent",
                fontSize: "18px",
              }}
            >
              Convert to {usd ? "PKR" : "USD"}
            </button>
        </div>
        </div>

        <div className="pkr-3578">
          {usd ? "USD" : "PKR"} {bal}
        </div>

        <div className="available-balance">Available Balance</div>

        <div className="dashboard-home-screen-item" />
        <label className="label">.</label>

        <label className="label1">.</label>
        <label className="label2">.</label>
        <div className="go-for-a">Go for a walk</div>
        <div className="buy-groceries">Buy Groceries</div>
        <img className="dashboard-home-screen-inner" alt="" src={img9} />
        <img className="rectangle-icon" alt="" src={img4} />
        <button className="rectangle-button" />
        <div className="to-do-list">
          <Link
            to="/ToDoList"
            style={{ textDecoration: "none", color: "white" }}
          >
            To-Do List
          </Link>
        </div>

        <div className="rectangle-div" />
        <button className="add-round-fill">
          <img className="subtract-icon" alt="" src={img15a} />
        </button>

        <div className="credit">
          <Link
            to="/addmoney"
            style={{ textDecoration: "none", color: "white" }}
          >
            Credit
          </Link>
        </div>

        <div className="dashboard-home-screen-child1" />
        <div className="debit">
          <Link
            to="/removemoney"
            style={{ textDecoration: "none", color: "white" }}
          >
            Debit
          </Link>
        </div>
        
        <button className="remove-fill">
          <img className="subtract-icon1" alt="" src={img5} />
        </button>

        <div className="dashboard-home-screen-child2" />

        <div className="view-history">
          <Link
            to="/piechart"
            style={{ textDecoration: "none", color: "white" }}
          >
            Budget Chart
          </Link>
        </div>

        <button className="view">
          <img className="view-child" alt="" src={img6} />
          <img className="view-item" alt="" src={img7} />
        </button>
        <div className="dashboard-home-screen-child3" />
        
        <div className="get-predictions">
          <Link
            to="/getPredictions"
            style={{ textDecoration: "none", color: "white" }}
          >
            Get Predictions
          </Link>
        </div>

        <button className="d-box-fill">
          <img className="subtract-icon2" alt="" src={img8} />
        </button>
        <button className="dashboard-home-screen-child4" />
        <div className="edit-account">Edit Account</div>

        <div className="checklist">
          <p className="checklist1">Checklist:</p>
        </div>

        <img className="dashboard-home-screen-child5" alt="" src={img9} />
        <div className="pay-bills">Pay Bills</div>
        <button className="dashboard-home-screen-child6" />

        <div className="submit-complaint">
          <Link
            to="/submitComplaints"
            style={{ textDecoration: "none", color: "white" }}
          >
            Submit Complaint
          </Link>
        </div>

        <button className="dashboard-home-screen-child7" />

        <div className="help">
          <Link
            to="/helppage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Help
          </Link>
        </div>

        <img className="image-2-icon" alt="" src={pic} />
        <img className="se-logog-photoaidcom-cropped-1" alt="" src={img} />
        <div className="expense-dinner">$18.00 expense “Dinner”</div>
        <div className="income-salary">$1,500.00 income “Salary”</div>
        <img className="iconoirreceive-dollars" alt="" src={img11} />
        <div className="expense-lauren">$32,15 expense “Laundry”</div>
        <img className="iconoirsend-dollars" alt="" src={img12} />
        <img className="iconoirsend-dollars1" alt="" src={img13} />
        <div className="latest-transactions">Latest transactions:</div>
        <img className="wallet-alt-icon" alt="" src={img14} />
        <img className="wallet-alt-icon1" alt="" src={img14} />
        <button className="dashboard-home-screen-child8" />

        <div className="logout">
          <button
            style={{
              textDecoration: "none",
              color: "white",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "18px",
            }}
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <img className="wallet-alt-icon2" alt="" src={img14} />
      </div>
    </div>
  );
};

export default DashboardHomeScreen;
