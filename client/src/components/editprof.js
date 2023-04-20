import "./editprof.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie'

const img = require("./planitpro_logo.png");

const Editprof = (props) => {

  // Connecting the Login button with the backend


  const navigate = useNavigate();
  const [,setCookies]=useCookies('access_token')

  const handleClick = async (name, password) => {
    console.log("The form was submitted with the following data:");
    console.log({ name, password });

    try {
      const response=await axios.post("http://localhost:3010/login", { name, password });
     
      setCookies(response.data.token);
      window.localStorage.setItem("User_ID", response.data.userID);

      console.log(response.data.message);

      if(response.data.message !== "invalid"){
        navigate("/home", { state: {name} });
      }
      else{
        alert("invalid Credentials, Please try again later")
      }
      
    } catch (error) {
      console.log("An error occurred");
    }
  };

  return (
    <>
    <head>
    <link rel="icon" href={img} />
    </head>
    <body class="li-body">
      <div id="loginform">
        <br></br>
        <img src={img} alt="PlanIt Pro logo" />
        <FormHeader title="EDIT PROFILE" />
        <Form onClick={handleClick} />
        {/* <OtherMethods /> */}
        {/* <p> Forgot Password?</p>
        <p> */}
          {/* {" "}
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p> */}
      </div>
    </body>
    </>
  );
};

export default Editprof;

const FormHeader = (props) => <h1 id="login-headerTitle">{props.title}</h1>;

const Form = (props) => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setimage] = useState("");

  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <span>
      <FormInput
        description="name"
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={handlenameChange}
      />
      <FormInput
        description="Password to confirm changes"
        placeholder="Enter your  password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <FormButton
        title="Make changes"
        onClick={() => props.onClick(name, password)}
      />
    </span>
  );
};

const FormButton = (props) => (
  <div id="button" class="row-edit">
    <button onClick={props.onClick}>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row-edit">
    <label> {props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </div>
);


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";


// import styles from "./editprof.module.css";

// const img = require("./planitpro_logo.png");

// const Editprof = (props) => {
//   // Connecting the Login button with the backend

//   const navigate = useNavigate();
//   const [, setCookies] = useCookies("access_token");

//   const handleClick = async (name, password) => {
//     console.log("The form was submitted with the following data:");
//     console.log({ name, password });

//     try {
//       const response = await axios.post("http://localhost:3010/login", {
//         name,
//         password,
//       });

//       setCookies(response.data.token);
//       window.localStorage.setItem("User_ID", response.data.userID);

//       console.log(response.data.message);

//       if (response.data.message !== "invalid") {
//         navigate("/home", { state: { name } });
//       } else {
//         alert("invalid Credentials, Please try again later");
//       }
//     } catch (error) {
//       console.log("An error occurred");
//     }
//   };

//   return (
//     <>
//       <head>
//         <link rel="icon" href={img} />
//       </head>
//       <body className={styles.liBody}>
//         <div id={styles.loginform}>
//           <br />
//           <img src={img} alt="PlanIt Pro logo" />
//           <FormHeader title="EDIT PROFILE" />
//           <Form onClick={handleClick} />
//         </div>
//       </body>
//     </>
//   );
// };

// export default Editprof;

// const FormHeader = (props) => (
//   <h1 id={styles.loginHeaderTitle}>{props.title}</h1>
// );

// const Form = (props) => {
//   const [name, setname] = useState("");
//   const [password, setPassword] = useState("");
//   const [image, setimage] = useState("");

//   const handlenameChange = (event) => {
//     setname(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <span>
//       <FormInput
//         description="name"
//         placeholder="Enter your name"
//         type="text"
//         value={name}
//         onChange={handlenameChange}
//       />
//       <FormInput
//         description="Password to confirm changes"
//         placeholder="Enter your password"
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <FormButton
//         title="Make changes"
//         onClick={() => props.onClick(name, password)}
//       />
//     </span>
//   );
// };

// const FormButton = (props) => (
//   <div id={styles.button} className={styles.rowEdit}>
//     <button onClick={props.onClick}>{props.title}</button>
//   </div>
// );

// const FormInput = (props) => (
//   <div className={styles.rowEdit}>
//     <label>{props.description}</label>
//     <input
//       type={props.type}
//       placeholder={props.placeholder}
//       value={props.value}
//       onChange={props.onChange}/>
//         </div>
//       );
      
