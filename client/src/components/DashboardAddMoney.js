import "./DashboardAddMoney.css";

const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");


const DashboardAddMoney = () => {
  return (
    <div className="dashboard-add-money">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />
      <div className="dashboard-add-money-child" />
      <b className="add-money">ADD MONEY</b>
      <div className="dashboard-add-money-item" />
      <button className="dashboard-add-money-inner" />
      <div className="add-money1">ADD MONEY</div>
      <div className="enter-the-amount"> 
        <p style={{textAlign: "center", lineHeight: "10px"}}>Enter the amount you want to Add:</p> 
    </div>
      <img
        className="se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />
      <input
        className="atom-input-container-sizes"
        type="number"
        placeholder="Enter amount here"
      />
      <input
        className="atom-input-container-sizes1"
        type="text"
        placeholder="Comments (Optional)"
      />
    </div>
  );
};

export default DashboardAddMoney;
