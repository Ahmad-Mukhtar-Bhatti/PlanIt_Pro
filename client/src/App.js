import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/signup" element = {<Signup/>} />
        </Routes>
      </Router>
    </>
    
    // <div className="App">
      




    //   {/* <nav class="navbar navbar-light bg-light">
    //     <form class="container-fluid justify-content-start">
    //       <button class="btn btn-outline-success me-2" type="button">Main button</button>
    //       <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
    //     </form>
    //   </nav>
      
      
      
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
