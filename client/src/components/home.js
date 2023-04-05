import "./DashboardHomeScreen.css";
import React from 'react';
const img = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");
const img4 = require("./home/rectangle-20@2x.png");
const img5 = require("./home/subtract1.svg");
const img6 = require("./home/ellipse-65.svg");
const img7 = require("./home/ellipse-66.svg");
const img8 = require("./home/subtract2.svg");
const img9 = require("./home/rectangle-20@2x.png");
const img10 = require("./home/image-2@2x.png");
const img11 = require("./home/iconoirreceivedollars.svg");
const img12 = require("./home/iconoirsenddollars.svg");
const img13 = require("./home/iconoirsenddollars.svg");
const img14 = require("./home/wallet-alt.svg");
const img15 = require("./home/subtract.svg");

const DashboardHomeScreen = () => {
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
            <div className="qaboos-ali-khan">Qaboos Ali Khan</div>
        </div>
        <div className="pkr-3578">PKR 3,578</div>
        <div className="available-balance">Available balance</div>
        <div className="dashboard-home-screen-item" />
        <label className="label">.</label>
        <label className="label1">.</label>
        <label className="label2">.</label>
        <div className="go-for-a">Go for a walk</div>
        <div className="buy-groceries">Buy Groceries</div>
        <img
            className="dashboard-home-screen-inner"
            alt=""
            src={img9}
        />
        <img className="rectangle-icon" alt="" src={img4} />
        <button className="rectangle-button" />
        <div className="to-do-list">To-Do List</div>
        <div className="rectangle-div" />
        <button className="add-round-fill">
            <img className="subtract-icon" alt="" src={img15} />
        </button>
        <div className="credit"> Credit</div>
        <div className="dashboard-home-screen-child1" />
        <div className="debit">Debit</div>
        <button className="remove-fill">
            <img className="subtract-icon1" alt="" src={img5} />
        </button>
        <div className="dashboard-home-screen-child2" />
        <div className="view-history">View History</div>
        <button className="view">
            <img className="view-child" alt="" src={img6} />
            <img className="view-item" alt="" src={img7} />
        </button>
        <div className="dashboard-home-screen-child3" />
        <div className="get-predictions">Get Predictions</div>
        <button className="d-box-fill">
            <img className="subtract-icon2" alt="" src={img8} />
        </button>
        <button className="dashboard-home-screen-child4" />
        <div className="edit-account">Edit Account</div>
        <div className="checklist">
            <p className="checklist1">Checklist:</p>
        </div>
        <img
            className="dashboard-home-screen-child5"
            alt=""
            src={img9}
        />
        <div className="pay-bills">Pay Bills</div>
        <button className="dashboard-home-screen-child6" />
        <div className="submit-complaint">Submit Complaint</div>
        <button className="dashboard-home-screen-child7" />
        <div className="help">Help</div>
        <img className="image-2-icon" alt="" src={img10} />
        <img
            className="se-logog-photoaidcom-cropped-1"
            alt=""
            src={img}
        />
        <div className="expense-dinner">$18.00 expense “Dinner”</div>
        <div className="income-salary">$1,500.00 income “Salary”</div>
        <img
            className="iconoirreceive-dollars"
            alt=""
            src={img11}
        />
        <div className="expense-lauren">$32,15 expense “Lauren”</div>
        <img
            className="iconoirsend-dollars"
            alt=""
            src={img12}
        />
        <img
            className="iconoirsend-dollars1"
            alt=""
            src={img13}
        />
        <div className="latest-transactions">Latest transactions:</div>
        <img className="wallet-alt-icon" alt="" src={img14} />
        <img className="wallet-alt-icon1" alt="" src={img14} />
        <button className="dashboard-home-screen-child8" />
        <div className="logout">Logout</div>
        <img className="wallet-alt-icon2" alt="" src={img14} />
        </div>
    </div>

  );
};

export default DashboardHomeScreen;
