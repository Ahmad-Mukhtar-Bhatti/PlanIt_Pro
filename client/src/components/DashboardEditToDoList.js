import "./DashboardEditToDoList.css";
import {Link} from 'react-router-dom'
import React from 'react'

const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");
const rectangle1 = require("./home/rectangle-20@2x.png");
const line4 = require("./home/line-4.svg");
const line41 = require("./home/line-41.svg");
const cancel = require("./home/cancel.svg");


const DashboardEditToDoList = () => {
  function handleSaveChanges() {
    alert("Changes saved!");
  }

  return (
    <div className="editt-dashboard-edit-to-do-list">
      <img className="editt-top-bar-icon" alt="" src={topbar} />
      <img className="editt-bg-01-1-icon" alt="" src={background} />
      <div className="editt-dashboard-edit-to-do-list-child" />
      <b className="editt-to-do-list">TO-DO LIST</b>
      <div className="editt-dashboard-edit-to-do-list-item" />
      <button className="editt-remove">Remove</button>
      <button className="editt-done">Done</button>
      <button className="editt-remove1">Remove</button>
      <button className="editt-done1">Done</button>
      <button className="editt-remove2">Remove</button>
      <button className="editt-done2">Done</button>
      <img className="editt-cancel-icon" alt="" src={cancel} />
      <img className="editt-cancel-icon1" alt="" src={cancel} />
      <img className="editt-cancel-icon2" alt="" src={cancel} />
      <img className="editt-cancel-icon3" alt="" src={cancel} />
      <img className="editt-cancel-icon4" alt="" src={cancel} />
      <img
        className="editt-dashboard-edit-to-do-list-inner"
        alt=""
        src={line4}
      />
      <img className="editt-editt-line-icon" alt="" src={line41} />
      <img
        className="editt-dashboard-edit-to-do-list-child1"
        alt=""
        src={line41}
      />
      <img
        className="editt-dashboard-edit-to-do-list-child2"
        alt=""
        src={line41}
      />
      <img
        className="editt-dashboard-edit-to-do-list-child3"
        alt=""
        src={line41}
      />
      <button className="editt-remove3">Remove</button>
      <button className="editt-done3">Done</button>
      <button className="editt-remove4">Remove</button>
      <button className="editt-done4">Done</button>
      <button className="editt-rectangle-button" />
      <div className="editt-add-new-task">Add New Task</div>
      <button className="editt-dashboard-edit-to-do-list-child4" />
      <div className="editt-adjust-tasks">Adjust Tasks</div>
      <button className="editt-dashboard-edit-to-do-list-child5" />

      <div className="editt-save-changes">
        <Link
          to="/ToDoList"
          style={{ textDecoration: "none", color: "white" }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Link>
      </div>

      <div className="editt-call-a-friend">Call a friend</div>
      <div className="editt-book-a-vacation">Book a vacation</div>
      <div className="editt-go-for-a">Go for a walk</div>
      <div className="editt-buy-groceries">Buy Groceries</div>
      <div className="editt-checklist">
        <p className="editt-checklist1">Checklist:</p>
      </div>
      <img className="editt-rectangle-icon" alt="" src={rectangle1} />
      <img
        className="editt-dashboard-edit-to-do-list-child6"
        alt=""
        src={rectangle1}
      />
      <img
        className="editt-dashboard-edit-to-do-list-child7"
        alt=""
        src={rectangle1}
      />
      <img
        className="editt-dashboard-edit-to-do-list-child8"
        alt=""
        src={rectangle1}
      />
      <img
        className="editt-dashboard-edit-to-do-list-child9"
        alt=""
        src={rectangle1}
      />
      <div className="editt-pay-bills">Pay Bills</div>
      <img
        className="editt-se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />
    </div>
  );
};

export default DashboardEditToDoList;
