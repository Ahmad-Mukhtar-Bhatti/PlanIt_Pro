import "./DashboardAddMoney.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserID } from "../hooks/useGetUserID.js";
import axios from "axios";


const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");



const DashboardAddMoney = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [comments, setComments] = useState("");
  const userID = getUserID();

  const handleSaveChanges = async () => {
    alert(`Complaint Submitted: ${comments}`)

    try {
      const response = await axios.post("http://localhost:3010/submitComplaints", {userID,comments});

      if (response.data.message === "Success") {
        alert("Response Submitted");
        navigate("/home")
        return;
      }
      else{
        alert("Response Failed");
      }
    } catch (error) {
      console.log("An error occurred");
    }


  };
   
    function handleCommentsChange(event) {
    setComments(event.target.value);
  }

  return (
    <div className="dashboard-add-money">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />
      <div className="dashboard-add-money-child" />
      <b className="add-money">submitComplaints</b>
      <div className="dashboard-add-money-item" />
      <button className="dashboard-add-money-inner" />

      <div className="add-money1">
        <Link
          
          style={{ textDecoration: "none", color: "white" }}
          onClick={handleSaveChanges}
        >
          Sumbit Complaint
        </Link>
      </div>

      <div className="enter-the-amount"> 
        <p style={{textAlign: "center", lineHeight: "10px"}}>Enter Your Complaint:</p> 
    </div>
      <img
        className="se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />
      <input
        className="atom-input-container-sizes1"
        type="text"
        placeholder="Comments (Optional)"
        value={comments}
        onChange={handleCommentsChange}

      />
    </div>
  );
};

export default DashboardAddMoney;
