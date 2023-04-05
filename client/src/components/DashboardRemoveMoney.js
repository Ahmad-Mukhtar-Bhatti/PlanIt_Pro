import { Stack, Select } from "@chakra-ui/react";
import "./DashboardRemoveMoney.css";

const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");

const DashboardRemoveMoney = () => {
  return (
    <div className="dashboard-remove-money">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />
      <div className="dashboard-remove-money-child" />
      <b className="remove-money">REMOVE MONEY</b>
      <div className="dashboard-remove-money-item" />
      <button className="dashboard-remove-money-inner" />
      <div className="remove-money1">REMOVE MONEY</div>
      
      <div className="enter-the-amount">
      <p style={{textAlign: "center", lineHeight: "10px"}}> Enter the amount you want to Remove:</p>
      </div>

      <img
        className="se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />

      <div className="purpose">Purpose:</div>
      
      <input
        className="atom-input-container-sizes"
        type="number"
        placeholder="Enter amount here"
      />
      <Stack className="remove-money-atom-input-container-sizes1" w="560px">
        <Select
          variant="outline"
          placeholder="Select option"
          textColor="#000"
          backgroundColor="#a24cfc"
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Laundry">Laundry</option>
          <option value="Rent">Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Other">Other</option>
        </Select>
      </Stack>
    </div>
  );
};

export default DashboardRemoveMoney;
