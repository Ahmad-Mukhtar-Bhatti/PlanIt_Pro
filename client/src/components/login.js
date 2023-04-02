import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const img = require("./planitpro_logo.png");

const Login = (props) => {
    const userData = props.data; 
    const Logininto = () => {
        console.log("Login handler")
    }

    // Connecting the Login button with the backend
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const handleClick = () => {
      fetch('http://localhost:3010/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Hello brother, I am connected!' })
      })
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error(error));
    };



    return (

      <body class = "li-body">
        <div id="loginform">
            <br></br> 
            <img src={img} alt="PlanIt Pro logo"/>
            <FormHeader title="PLAN-IT PRO" />
            <Form onClick={handleClick}/>
            {/* <OtherMethods /> */}
            <p> Forgot Password?</p>
            <p> Don't have an account? <Link to= "/signup">Sign Up</Link></p>
        </div>

      </body>
); 
}

export default Login;       

const FormHeader = props => (
    <h1 id="login-headerTitle">{props.title}</h1>
);


const Form = props => (
   <span>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in" onClick={props.onClick}/>
   </span>
);

const FormButton = props => (
  <div id="button" class="row">
    <button onClick={props.onClick}>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label> {props.description}</label>
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
