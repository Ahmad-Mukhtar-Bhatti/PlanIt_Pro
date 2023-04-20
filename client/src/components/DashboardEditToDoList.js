import "./DashboardEditToDoList.css";
import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from "axios";
import { getUserID } from "../hooks/useGetUserID.js";

const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");
const rectangle1 = require("./home/rectangle-20@2x.png");
const line4 = require("./home/line-4.svg");
const line41 = require("./home/line-41.svg");
const cancel = require("./home/cancel.svg");


const DashboardEditToDoList = (props) => {
  const handleDoneClick = async (task) => {
    const uid = getUserID();
    console.log(`Task "${task.Description}" marked as done`);
    const d = task.Description;
    console.log("The task is", d);
    try {
      console.log("HERE NOW", uid);
      const response = await axios.delete("http://localhost:3010/removeTask/", { data: { uid, task: d } });
      alert("Task Marked as Done");
      setToDoList(response.data.message);
      console.log("HERE IT IS", response.data.message);
    } catch (error) {
    console.log(error);
    }
    };
    
    const handleRemoveClick = async (task) => {
    console.log(`Task "${task.Description}" removed`);
    const d = task.Description;
    console.log("The task is", d);
    try {
      console.log("HERE NOW", uid);
      const response = await axios.delete("http://localhost:3010/removeTask/", { data: { uid, task: d } });
      alert("Task Removed");
      setToDoList(response.data.message);
      console.log("HERE IT IS", response.data.message);
    } catch (error) {
    console.log(error);
    }
    // call function passing task description as argument
    };
  function handleSaveChanges() {
    alert("Changes saved!");
  }
  const [toDoList, setToDoList] = useState([]);
  const uid = getUserID();

  useEffect(() => {
    const fetchToDoList = async () => {
    try {
      console.log("HERE NOW", uid);
      const response = await axios.post("http://localhost:3010/ToDo", { uid });
      setToDoList(response.data.message);
      console.log("HERE IT IS", response.data.message);
    } catch (error) {
    console.log(error);
    }
    };
    fetchToDoList();
    }, []);

  return (
    <div className="editt-dashboard-edit-to-do-list">
      <img className="editt-top-bar-icon" alt="" src={topbar} />
      <img className="editt-bg-01-1-icon" alt="" src={background} />
      <div className="editt-dashboard-edit-to-do-list-child" />
      <b className="editt-to-do-list">TO-DO LIST</b>
      <div className="editt-dashboard-edit-to-do-list-item" />

      <button className="editt-rectangle-button" />
      
      <div className="editt-add-new-task">
        <Link to="/addNewTask" style={{ textDecoration: "none", color: "white" }}> Add New Task </Link>
      </div>

      <button className="editt-dashboard-edit-to-do-list-child4" />
      <div className="editt-adjust-task">
        <Link to="/adjustTasks" style={{ textDecoration: "none", color: "white"}}> Adjust Tasks</Link>
      </div>
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
      <div className="to-do-list-checklist">
      <p className="to-do-list-checklist1">Checklist:</p>
      {toDoList.map(task => (
        <div key={task._id}>
          <p className="task-description" style={{ marginLeft: 10 }}>{task.Description}</p>
          <button
            className="done-button"
            style={{ backgroundColor: "green" }}
            onClick={() => handleDoneClick(task)}
          >Done</button>
          <button
            className="remove-button"
            style={{ backgroundColor: "red" }}
            onClick={() => handleRemoveClick(task)}
          >Remove</button>
        </div>
      ))}
    </div>
      <img
        className="editt-se-logog-photoaidcom-cropped-1"
        alt=""
        src={logo}
      />
    </div>
  );
};

export default DashboardEditToDoList;
