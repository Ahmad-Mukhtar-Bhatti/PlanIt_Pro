import './signup.css';
import { useNavigate } from 'react-router-dom';

import React, { Component } from "react";
const img = require("./planitpro_logo.png");


const Signup = (props) => {
    const userData = props.data; 

    const navigate = useNavigate();
    function handleClick() {
      navigate('/login');
    }

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


const Form = props => (

   <span>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Email" placeholder="Enter your email" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="text" />
     <FormInput description="Re-Enter Password" placeholder="Re-enter your password" type="password"/>
     <br></br><input type="checkbox" id="termsnconditions" name="tnx" value="Terms and Conditions"/>
     <label for="termsnconditions"> I Agree with the Terms and Conditions</label><br></br>
     <FormButton onClick={props.onClick}/>
   </span>
);

const FormButton = props => (
  <div id="button" class="row">
    <button onClick={props.onClick}> Sign up </button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

// const OtherMethods = props => (
//   <div id="alternativeLogin">
//     <label>Or sign in with:</label>
//     <div id="iconGroup">
//       <Facebook />
//       <Twitter />
//       <Google />
//     </div>
//   </div>
// );

// const Facebook = props => (
//   <a href="/" id="facebookIcon"></a>
// );

// const Twitter = props => (
//   <a href="/" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="/" id="googleIcon"></a>
// );
