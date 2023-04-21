import "./DashboardToDoList.css";
import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from "axios";
import { getUserID } from "../hooks/useGetUserID.js";
import plusIcon from "./home/plus.svg";
import minusIcon from "./home/trace.svg";


const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");
const rectange = require("./home/rectangle-20@2x.png");
const line5 = require("./home/line-5.svg");


const DashboardAdjustTasks = (props) => {
    const handleAddClick = async (task) => {
        const uid = getUserID();
        const d = task.Description;
        console.log("The task is", d);
        try {
          console.log("HERE NOW", uid, d);
          const response = await axios.post("/adjustTask/", { uid, task: d, str:"inc" });
          //alert("Task Priority Increased");
          setToDoList(response.data.message);
          console.log("HERE IT IS", response.data.message);
        } catch (error) {
        console.log(error);
        }
        };
    const handleDecreaseClick = async (task) => {
        const uid = getUserID();
        const d = task.Description;
        console.log("The task is", d);
        try {
            console.log("HERE NOW", uid, d);
            const response = await axios.post("http://localhost:3010/adjustTask/", { uid, task: d, str:"dec" });
            //alert("Task Priority Decreased");
            setToDoList(response.data.message);
            console.log("HERE IT IS", response.data.message);
        } catch (error) {
        console.log(error);
        }
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

        <button className="editt-dashboard-edit-to-do-list-child5" />

        <div className="editt-save-changes">
        <Link
            to="/editToDoList"
            style={{ textDecoration: "none", color: "white" }}
            onClick={handleSaveChanges}
        >
            Save Changes
        </Link>
        </div>
        <div className="to-do-list-checklist54">
        <p className="to-do-list-checklist1">Checklist:</p>
        {toDoList.map(task => (
    <div key={task._id} className="task-box3">
        <div className="task-container">
            <p className="task-description">{task.Description}    Priority:  {task.Priority}</p>
            <div className="button-container">
                <button className="icon-button"><img src={plusIcon} alt="plus" onClick={() => handleAddClick(task)} /></button>
                <button className="icon-button"><img src={minusIcon} alt="minus" className="editt-minus-icon" onClick={() => handleDecreaseClick(task)} /></button>
            </div>
        </div>
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

export default DashboardAdjustTasks;