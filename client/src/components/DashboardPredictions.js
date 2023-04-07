import "./DashboardPredictions.css";
import {Link} from 'react-router-dom'

const pre1 = require("./home/topbar.svg");
const pre2 = require("./home/bg01-1@2x.png");
const pre3 = require("./home/image-2@2x.png"); // temp image
const pre4 = require("./home/se-logogphotoaidcomcropped-1@2x.png");

const DashboardPredictions = () => {
  return (
    <div className="dashboard-predictions">
      <img className="pred_top-bar-icon" alt="" src={pre1} />
      <img className="bg-01-1-icon" alt="" src={pre2} />
      <div className="dashboard-predictions-child" />
      <b className="predictions">PREDICTIONS</b>
      <div className="pred_view" />
      <div className="dashboard-predictions-item" />
      <img className="dashboard-predictions-inner" alt="" src={pre3} />


      <button className="pred_rectangle-button" />
      <div className="smart-suggestions">Smart Suggestions</div>
      <button className="dashboard-predictions-child1" />

      <div className="pred_back-to-home">
            <Link to="/home" style={{textDecoration: 'none', color: "white"}}>Back to Home Page</Link>
      </div>

      <div className="pred_rectangle-div" />
      <div className="days">Days</div>
      <div className="spending">Spending</div>
      <div className="dashboard-predictions-child2" />
      <div className="based-on-your-container">
        <span>
          Based on your spending so far in the month, your projected total spend
          at the end of the month is
        </span>
        <span className="pkr-58000"> PKR 58,000</span>
        <span>{`, which is `}</span>
        <span className="pkr-8000-more">PKR 8,000 more</span>
        <span> than your budget for the month.</span>
      </div>
      <img
        className="pred_se-logog-photoaidcom-cropped-1"
        alt=""
        src={pre4}
      />
    </div>
  );
};

export default DashboardPredictions;
