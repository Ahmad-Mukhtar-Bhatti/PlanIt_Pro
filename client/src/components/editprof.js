import styles from "./editprof.module.css";
import "./editprof.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'

const img = require("./planitpro_logo.png");
const img2 = require("./home/topbar.svg");
const img3 = require("./home/bg01-1@2x.png");

const Editprof = (props) => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies('access_token')
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setimage] = useState("");

  const handleClick = async () => {
    console.log("The form was submitted with the following data:");
    console.log({ name, password, image });

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("password", password);
      formData.append("image", image);

      const response = await axios.post("http://localhost:3010/edit", formData);

      setCookies(response.data.token);
      window.localStorage.setItem("User_ID", response.data.userID);

      console.log(response.data.message);

      // if (response.data.message !== "invalid") {
        navigate("/home", { state: { name } });
      // } else {
      //   alert("Invalid credentials. Please try again later.");
      // }
    } catch (error) {
      console.log("An error occurred");
    }
  };

  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleButtonClick = (props) => {
    const isConfirmed = window.prompt('Please re-enter your password to confirm changes.');
    console.log(props.password);
    // if (isConfirmed === props.password) {
    navigate('/home')      
    // } else {
    //   alert('Incorrect password. Please try again.');
    // }
  };

  
  const FormHeader = (props) => <h1 className={styles.loginheaderTitle}>{props.title}</h1>;
  
  const Form = (props) => {
    
    return (
    <span>
      <FormInput
        description="Name"
        placeholder="Enter your name"
        type="text"
        value={props.name}
        onChange={props.handlenameChange}
      />
      <br></br>
      
      <FormInput
        description="Profile Picture:"
        type="file"
        onChange={(event) => {
          props.setImage(event.target.files[0]);
        }}
      />
      <br></br>

      <FormInput
        description="Enter New Password"
        placeholder="Enter your password"
        type="password"
        value={props.password}
        onChange={props.handlePasswordChange}
        />
      <br></br>

      <FormButton title="Make changes" onClick={handleButtonClick} />
    </span>
  );
};

const FormButton = (props) => (
  <div id="button" class="row">
    <button className={styles.button} onClick={handleButtonClick}>{props.title}</button>
  </div>
);


const FormInput = (props) => (
  <div class="row">
    <label> {props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </div>
);






return (
  <>
    <div className="body">
      <div className="dashboard-home-screen">
        <img className="top-bar-icon" alt="" src={img2} />
        <img className="bg-01-1-icon" alt="" src={img3} />
        <div className="dashboard-home-screen-child" />
        <b className="home">Budget Chart</b>
        <head>
          <link rel="icon" href={img} />
        </head>
        <body class="li-body">
          <div id="loginform">
            <br></br>
            <img src={img} alt="PlanIt Pro logo" />
            {/* <img src={img} alt="PlanIt Pro logo" /> */}
            <FormHeader title="EDIT PROFILE" />
            <Form
              name = {name}
              password = {password}
              image = {image}
              onClick = {handleClick}
              handlenameChange = {handlenameChange}
              handlePasswordChange = {handlePasswordChange}
              setImage = {setimage}
            />
          </div>
        </body>
      </div>
    </div>
  </>
);
};

export default Editprof;