import './App.css';
import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Editprof from './components/editprof';
import AdminScreen from './components/admin';

// dashboard 
import DashboardAddMoney from './components/DashboardAddMoney';
import DashboardRemoveMoney from './components/DashboardRemoveMoney';
import DashboardToDoList from './components/DashboardToDoList';
import DashboardPredictions from './components/DashboardPredictions';
import DashboardHelp from './components/helpPage';
import DashboardPieChart from './components/DashboardPiechart';
import DashboardSubmitComplaint from './components/DashboardSubmitComplaint';

// to do list options
import DashboardEditToDoList from './components/DashboardEditToDoList';
import DashboardAddNewTask from './components/DashboardAddNewTask';
import DashboardAdjustTasks from './components/DashboardAdjustTasks';

function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<AdminScreen />} />
          {/* should add some kind of authentication to prevent users from 
          jumping from site to site without user authentication*/}
          <Route path = "/editprof" element = {<Editprof/>} />
          <Route path = "/addmoney" element = {<DashboardAddMoney/>} />
          <Route path = "/removemoney" element = {<DashboardRemoveMoney/>} />
          <Route path = "/ToDoList" element = {<DashboardEditToDoList/>} />
          <Route path = "/getPredictions" element = {<DashboardPredictions/>} />
          <Route path = "/helppage" element = {<DashboardHelp/>} />
          <Route path = "/piechart" element = {<DashboardPieChart/>} />


          <Route path = "/editToDoList" element = {<DashboardEditToDoList/>} />
          <Route path = "/addNewTask" element = {<DashboardAddNewTask/>} />
          <Route path = "/submitComplaints" element = {<DashboardSubmitComplaint/>} />
          <Route path = "/adjustTasks" element = {<DashboardAdjustTasks/>} />

          
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
