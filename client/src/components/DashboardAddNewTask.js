import "./DashboardAddNewTask.css";
import {Link} from 'react-router-dom'

const add1 = require("./home/topbar.svg");
const add2 = require("./home/bg01-1@2x.png");
const add3 = require("./home/se-logogphotoaidcomcropped-1@2x.png");


const DashboardAddNewTask = () => {
  function handleSaveChanges() {
    alert("New Task Added!");
  }

  return (
    <div className="dashboard-add-new-task">
      <img className="top-bar-icon" alt="" src={add1} />
      <img className="bg-01-1-icon" alt="" src={add2} />
      <div className="dashboard-add-new-task-child" />
      <b className="addnew_to-do-list">TO-DO LIST</b>
      <div className="dashboard-add-new-task-item" />
      <input
        className="addnew_atom-input-container-sizes"
        type="text"
        placeholder="Enter task here"
      />
      <button className="dashboard-add-new-task-inner" />

      <div className="add-task">
        <Link
          to="/editToDoList"
          style={{ textDecoration: "none", color: "white" }}
          onClick={handleSaveChanges}
        >
          Add Task
        </Link>
      </div>

      <img
        className="addnew_se-logog-photoaidcom-cropped-1"
        alt=""
        src={add3}
      />
    </div>
  );
};

export default DashboardAddNewTask;
