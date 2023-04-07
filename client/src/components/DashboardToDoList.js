import "./DashboardToDoList.css";
import { Link } from "react-router-dom";


const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");
const rectange = require("./home/rectangle-20@2x.png");
const line5 = require("./home/line-5.svg");

const DashboardToDoList = () => {
  return (
    <div className="dashboard-to-do-list">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />

      <div className="home-goer">
            <Link to="/home" style={{textDecoration: 'none', color: "white"}}>Home Screen</Link>
      </div>


      <div className="dashboard-to-do-list-child" />
      <b className="d2-to-do-list">TO-DO LIST</b>
      <div className="dashboard-to-do-list-item" />
      <div className="call-a-friend">Call a friend</div>
      <div className="book-a-vacation">Book a vacation</div>
      <div className="to-do-list-go-for-a">Go for a walk</div>
      <div className="to-do-list-buy-groceries">Buy Groceries</div>
      <div className="to-do-list-checklist">
        <p className="to-do-list-checklist1">Checklist:</p>
      </div>
      <img
        className="dashboard-to-do-list-inner"
        alt=""
        src={rectange}
      />
      <img className="to-do-list-rectangle-icon" alt="" src={rectange} />
      <img
        className="dashboard-to-do-list-child1"
        alt=""
        src={rectange}
      />
      <img
        className="dashboard-to-do-list-child2"
        alt=""
        src={rectange}
      />
      <img
        className="dashboard-to-do-list-child3"
        alt=""
        src={rectange}
      />
      <div className="to-do-list-pay-bills">Pay Bills</div>
      <button className="to-do-list-rectangle-button" />

      <div className="edit">
            <Link to="/editToDoList" style={{textDecoration: 'none', color: "white"}}>Edit</Link>
      </div>

      <div className="to-do-list-rectangle-div" />
      <div className="attend-social-event">Attend social event</div>
      <div className="watch-a-movie">Watch a movie</div>
      <div className="take-pet-to">Take pet to the vet</div>
      <img className="line-icon" alt="" src={line5} />
      <img className="dashboard-to-do-list-child4" alt="" src={line5} />
      <img className="dashboard-to-do-list-child5" alt="" src={line5} />
      <img className="dashboard-to-do-list-child6" alt="" src={line5} />
      <div className="do-laundry">Do laundry</div>
      <div className="recent">
        <p className="checklist1">Recent:</p>
      </div>
      <img
        className="se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />
    </div>
  );
};

export default DashboardToDoList;
