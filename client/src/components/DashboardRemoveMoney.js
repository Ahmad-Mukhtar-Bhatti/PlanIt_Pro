import { Stack, Select } from "@chakra-ui/react";
import "./DashboardRemoveMoney.css";
import {useNavigate,Link} from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import { getUserID } from "../hooks/useGetUserID.js";


const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");

const DashboardRemoveMoney = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const userID = getUserID();

  const handleSaveChanges = async () => {
    alert(`Debited Money: ${amount}, type: ${type}`)

    try {
      const response = await axios.post("http://localhost:3010/removemoney", {userID, amount,type});

      console.log("removemoney",response)
      navigate('/home')
      
    } catch (error) {
      console.log("An error occurred");
    }


  };

  

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }
    
  function handleTypeChange(event) {
    setType(event.target.value);
  }
  return (
    <div className="dashboard-remove-money">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />
      <div className="dashboard-remove-money-child" />
      <b className="remove-money">Debit</b>
      <div className="dashboard-remove-money-item" />
      <button className="dashboard-remove-money-inner" />

      <div className="remove-money1">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          onClick={handleSaveChanges}
        >
          Remove Money
        </Link>
      </div>

      <div className="enter-the-amount">
      <p style={{textAlign: "center", lineHeight: "10px"}}> Enter Debit Amount:</p>
      </div>

      <img
        className="se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />

      <div className="purpose" style={{ paddingLeft: '25px' }}>Purpose:</div>
      
      <input
        className="atom-input-container-sizes"
        type="number"
        placeholder="Enter amount here"
        value={amount}
        onChange={handleAmountChange}

      />
      <Stack className="remove-money-atom-input-container-sizes1" w="560px">
        <Select
          variant="outline"
          placeholder="Select option"
          textColor="#000"
          backgroundColor="#a24cfc"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Laundry">Laundry</option>
          <option value="Rent">Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </Select>
      </Stack>
    </div>
  );
};

export default DashboardRemoveMoney;
