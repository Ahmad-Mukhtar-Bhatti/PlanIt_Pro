import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const img = require("./planitpro_logo.png");

const Login = (props) => {
  const userData = props.data;
  const Logininto = () => {
    console.log("Login handler");
  };
    const userData = props.data; 
    const Logininto = () => {
        console.log("Login handler")
    }

    const [formData, setFormData] = useState({
      name: 'x',
      password: 'y',
    });

  // Connecting the Login button with the backend
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (username, password) => {
    console.log("The form was submitted with the following data:");
    console.log({ username, password });

    try {
      await axios.post("http://localhost:3010/api/data", { username, password });
      alert("The login was successful");
    } catch (error) {
      console.log("An error occurred");
    }
  };
    // Connecting the Login button with the backend
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const handleClick = () => {
      fetch('http://localhost:3010/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formData})
      })
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error(error));
    };



  return (
    <body class="li-body">
      <div id="loginform">
        <br></br>
        <img src={img} alt="PlanIt Pro logo" />
        <FormHeader title="PLAN-IT PRO" />
        <Form onClick={handleClick} value = {formData} />
        {/* <OtherMethods /> */}
        <p> Forgot Password?</p>
        <p>
          {" "}
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </body>
  );
};

export default Login;

const FormHeader = (props) => <h1 id="login-headerTitle">{props.title}</h1>;

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <span>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <FormButton
        title="Log in"
        onClick={() => props.onClick(username, password)}
      />
    </span>
  );
};
const Form = props => (
   <span>
     <FormInput description="Username" placeholder="Enter your username" type="text" value = {props.value.name}/>
     <FormInput description="Password" placeholder="Enter your password" type="password" value = {props.value.password}/>
     <FormButton title="Log in" onClick={props.onClick}/>
   </span>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button onClick={props.onClick}>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label> {props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </div>
    <input type={props.type} placeholder={props.placeholder} value = {props.value}/>
  </div>  
);

