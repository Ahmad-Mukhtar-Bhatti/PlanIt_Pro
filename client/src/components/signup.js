import './signup.css';

import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie'


import { Component } from "react";
const img = require("./planitpro_logo.png");


const Signup = (props) => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies('access_token');

  const handleClick = async (username, name, password, password2) => {
    console.log("The form was submitted with the following data:");
    console.log({ username, name, password, password2 });

    // Check if the username already exists
    try {
      const usernameExists = await axios.post("http://localhost:3010/check-username", { username });
      if (usernameExists.data.message === "Username already exists") {
        alert("Username already exists");
        return;
      }
    } catch (error) {
      console.log("An error occurred while checking the username");
      alert("An error occurred. Please try again later.");
      return;
    }

    // Check if the password and password2 match
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    // Continue with signup process
    try {
      const response = await axios.post("http://localhost:3010/signup", { username, password });
      setCookies(response.data.token);
      window.localStorage.setItem("User_ID", response.data.userID);
      console.log(response.data.userID);
      console.log(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log("An error occurred while signing up");
      alert("An error occurred. Please try again later.");
    }
  };

  return (

        <body class = "su-body">
        <div class="split-left">
            <img src={img} alt="PlanIt Pro logo"/>
        </div>

        <div class="split-right">
          <div id="signupform">
            <br></br> 
            <FormHeader title="CREATE ACCOUNT" />
            <Form onClick={handleClick}/>
        
          </div>
        </div>
                
        </body>

); 
}

export default Signup;       


const FormHeader = props => (
    <h1 id="signup-headerTitle">{props.title}</h1>
);


const Form = (props) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  return (
   <span>
     <FormInput description="Username" placeholder="Enter your username" type="text" value={username} onChange={handleUsernameChange}/>
     <FormInput description="Name" placeholder="Enter your name" type="text"  value={name} onChange={handleNameChange}/>
     <FormInput description="Password" placeholder="Enter your password" type="password"  value={password} onChange={handlePasswordChange}/>
     <FormInput description="Re-Enter Password" placeholder="Re-enter your password" type="password"  value={password2} onChange={handlePassword2Change}/>
     <br></br><input type="checkbox" id="termsnconditions" name="tnx" value="Terms and Conditions"/>
     <label for="termsnconditions"> I Agree with the Terms and Conditions</label><br></br>
     <FormButton title="Sign Up" onClick={() => props.onClick(username, name, password, password2)}/>
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
