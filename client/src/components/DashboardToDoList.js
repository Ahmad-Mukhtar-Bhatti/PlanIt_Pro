import "./DashboardToDoList.css";
import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from "axios";
import { getUserID } from "../hooks/useGetUserID.js";


const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");
const rectange = require("./home/rectangle-20@2x.png");
const line5 = require("./home/line-5.svg");


const DashboardToDoList = (props) => {
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
      <div className="dashboard-to-do-list">
        <img className="top-bar-icon" alt="" src={topbar} />
        <img className="bg-01-1-icon" alt="" src={background} />

        <button className="to-do-list-rectangle-button" style={{marginLeft: '440px'}} />
        <div className="home-goer">
          <Link to="/home" style={{textDecoration: 'none', color: "white", marginLeft: '-410px'}}>Home Screen</Link>
        </div>
    
        <div className="dashboard-to-do-list-child" />
        <b className="d2-to-do-list">TO-DO LIST</b>
        

        <div className="to-do-list-checklist">
        <p className="to-do-list-checklist1">Checklist:</p>
        {toDoList.map(task => (
          <div key={task._id} className="task-box">
            <p className="task-description">{task.Description}</p>
          </div>
        ))}
      </div>
 
    
        <button className="to-do-list-rectangle-button" style={{marginLeft: '10px'}} />
    
        <div className="edit" style={{marginLeft: '40px'}}>
          <Link to="/editToDoList" style={{textDecoration: 'none', color: "white", marginLeft: '-25px'}}>Edit</Link>
        </div>
    
        <div className="to-do-list-rectangle-div" />
        <img
          className="se-logog-photoaidcom-cropped-1"
          alt=""
          src={logo}
        />
      </div>
    );
  }    

export default DashboardToDoList;
