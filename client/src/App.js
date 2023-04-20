import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Editprof from './components/editprof';

// dashboard 
import DashboardAddMoney from './components/DashboardAddMoney';
import DashboardRemoveMoney from './components/DashboardRemoveMoney';
import DashboardToDoList from './components/DashboardToDoList';
import DashboardPredictions from './components/DashboardPredictions';
import DashboardHelp from './components/helpPage';
import DashboardPieChart from './components/piechart';


// to do list options
import DashboardEditToDoList from './components/DashboardEditToDoList';
import DashboardAddNewTask from './components/DashboardAddNewTask';
import DashboardAdjustTasks from './components/DashboardAdjustTasks';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/signup" element = {<Signup/>} />
          <Route path = "/home" element = {<Home/>} />
          {/*  should add some kind of authentication to prevent users from 
          jumping from site to site without user authentication*/}
          <Route path = "/editprof" element = {<Editprof/>} />
          <Route path = "/addmoney" element = {<DashboardAddMoney/>} />
          <Route path = "/removemoney" element = {<DashboardRemoveMoney/>} />
          <Route path = "/ToDoList" element = {<DashboardToDoList/>} />
          <Route path = "/getPredictions" element = {<DashboardPredictions/>} />
          <Route path = "/helppage" element = {<DashboardHelp/>} />
          <Route path = "/piechart" element = {<DashboardPieChart/>} />


          <Route path = "/editToDoList" element = {<DashboardEditToDoList/>} />
          <Route path = "/addNewTask" element = {<DashboardAddNewTask/>} />
          <Route path = "/adjustTasks" element = {<DashboardAdjustTasks/>} />

          
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
