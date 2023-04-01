import './login.css';
import { Link } from 'react-router-dom';

const img = require("./planitpro_logo.png");

const Login = (props) => {
    const userData = props.data; 
    const Logininto = () => {
        console.log("Login handler")
    }
    return (

      <body class = "li-body">
        <div id="loginform">
            <br></br> 
            <img src={img} alt="PlanIt Pro logo"/>
            <FormHeader title="PLAN-IT PRO" />
            <Form />
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
     <FormButton title="Log in"/>
   </span>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
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
