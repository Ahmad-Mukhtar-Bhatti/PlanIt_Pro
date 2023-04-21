import styles from "./editprof.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'

const img = require("./planitpro_logo.png");

const Editprof = (props) => {

  // Connecting the Login button with the backend

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

      const response = await axios.post("http://localhost:3010/login", formData);

      setCookies(response.data.token);
      window.localStorage.setItem("User_ID", response.data.userID);

      console.log(response.data.message);

      if (response.data.message !== "invalid") {
        navigate("/home", { state: { name } });
      } else {
        alert("Invalid credentials. Please try again later.");
      }
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

  return (
    <>
      <head>
        <link rel="icon" href={img} />
      </head>
      <body className={styles.body}>
        <div id={styles.loginform}>
          <br></br>
          <img src={img} alt="PlanIt Pro logo" />
          <FormHeader title="EDIT PROFILE" />
          <Form
            name={name}
            password={password}
            image={image}
            onClick={handleClick}
            handlenameChange={handlenameChange}
            handlePasswordChange={handlePasswordChange}
            setImage={setimage}
          />
        </div>
      </body>
    </>
  );
};

export default Editprof;

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
      
      <FormInput
        description="Profile Picture"
        type="file"
        onChange={(event) => {
          props.setImage(event.target.files[0]);
        }}
      />
      <FormInput
        description="Password to confirm changes"
        placeholder="Enter your password"
        type="password"
        value={props.password}
        onChange={props.handlePasswordChange}
      />
      <FormButton title="Make changes" onClick={props.onClick} />
    </span>
  );
};

const FormButton = (props) => (
  <div className={styles.rowEdit}>
    <button className={styles.button} onClick={props.onClick}>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className={styles.rowEdit}>
    <label> {props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </div>
);


