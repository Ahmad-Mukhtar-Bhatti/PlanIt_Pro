import "./DashboardAddNewTask.css";
import { useState } from "react";
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from "axios";
import { getUserID } from "../hooks/useGetUserID.js";

const add1 = require("./home/topbar.svg");
const add2 = require("./home/bg01-1@2x.png");
const add3 = require("./home/se-logogphotoaidcomcropped-1@2x.png");

const DashboardAddNewTask = (props) => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies('access_token');
  const [task, setTask] = useState("");

  const handleSaveChanges = async (task) => {
    const uid = getUserID();
    try {
      const response = await axios.post("http://localhost:3010/addNewTask", { uid, task });
      if (response.data.message === "Success") {
        alert("New Task Added!");
        navigate("/editToDoList")
        return;
      } else {
        alert("Failed to add new task.");
      }
    } catch (error) {
      console.log("An error occurred while adding new task.");
      alert("An error occurred. Please try again later.");
      return;
    }

    // try {
      
    //   const response = await axios.post("http://localhost:3010/addNewTask", { uid, task });
    //   setCookies(response.data.token);
    //   window.localStorage.setItem("User_ID", response.data.userID);
    //   console.log(response.data.userID);
    //   console.log(response.data.message);
    //   navigate("/login");
    // } catch (error) {
    //   console.log("An error occurred while signing up");
    //   alert("An error occurred. Please try again later.");
    // }
  };


  return (
    <div className="dashboard-add-new-task">
      <img className="top-bar-icon" alt="" src={add1} />
      <img className="bg-01-1-icon" alt="" src={add2} />
      <div className="dashboard-add-new-task-child" />
      <b className="addnew_to-do-list">TO-DO LIST</b>
      <div className="dashboard-add-new-task-item" />
      {/* <input
        className="addnew_atom-input-container-sizes"
        type="text"
        placeholder="Enter task here"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      /> */}
      <div className="addnew_atom-input-container-sizes">
        <Form onClick={handleSaveChanges}/>
      </div>

      <button className="dashboard-add-new-task-inner" />

      {/* <div className="add-task">
        <Form onClick={handleSaveChanges}/>
      </div> */}

      <img
        className="addnew_se-logog-photoaidcom-cropped-1"
        alt=""
        src={add3}
      />
    </div>
  );
};

export default DashboardAddNewTask;

const Form = (props) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  return (
   <span>
     <FormInput description="Task" placeholder="Enter new task" type="text" value={task} onChange={handleTaskChange}/>
     <FormButton title="Add Task" onClick={() => props.onClick(task)}/>
   </span>
  );
  };

const FormButton = props => (
  <div id="button" class="row">
    <button onClick={props.onClick}> {props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </div>  
);











// import "./DashboardAddNewTask.css";
// import {Link} from 'react-router-dom'
// import { useState } from "react";
// import {useCookies} from 'react-cookie'
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const add1 = require("./home/topbar.svg");
// const add2 = require("./home/bg01-1@2x.png");
// const add3 = require("./home/se-logogphotoaidcomcropped-1@2x.png");

// const DashboardAddNewTask = (props) => {
//   const navigate = useNavigate();
//   const [, setCookies] = useCookies('access_token');
//   const [task, setTask] = useState("");

//   const handleSaveChanges = async (task) => {
//     try {
//       const response = await axios.post("http://localhost:3010/addNewTask", { task });
//       if (response.data.message === "Success") {
//         alert("New Task Added!");
//         navigate("/editToDoList")
//         return;
//       } else {
//         alert("Failed to add new task.");
//       }
//     } catch (error) {
//       console.log("An error occurred while adding new task.");
//       alert("An error occurred. Please try again later.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3010/addNewTask", { task });
//       setCookies(response.data.token);
//       window.localStorage.setItem("User_ID", response.data.userID);
//       console.log(response.data.userID);
//       console.log(response.data.message);
//       navigate("/editToDoList");
//     } catch (error) {
//       console.log("An error occurred while signing up");
//       alert("An error occurred. Please try again later.");
//     }
//   };
  

// // const DashboardAddNewTask = () => {
// //   const [task, setTask] = useState("");
// //   function handleSaveChanges() {
// //     alert("New Task Added!");
// //   }

//   return (
//     <div className="dashboard-add-new-task">
//       <img className="top-bar-icon" alt="" src={add1} />
//       <img className="bg-01-1-icon" alt="" src={add2} />
//       <div className="dashboard-add-new-task-child" />
//       <b className="addnew_to-do-list">TO-DO LIST</b>
//       <div className="dashboard-add-new-task-item" />
//       <input
//         className="addnew_atom-input-container-sizes"
//         type="text"
//         placeholder="Enter task here"
//         value={task}
//         onChange={(event) => setTask(event.target.value)}
//       />
//       <button className="dashboard-add-new-task-inner" />

//       <div className="add-task">
//         <Link
//           to="/editToDoList"
//           style={{ textDecoration: "none", color: "white" }}
//           onClick={handleSaveChanges}
//         >
//           Add Task
//         </Link>
//       </div>

//       <img
//         className="addnew_se-logog-photoaidcom-cropped-1"
//         alt=""
//         src={add3}
//       />
//     </div>
//   );
// };

// export default DashboardAddNewTask;
