import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignupCand from "./pages/SignupCand";
import SignupComp from "./pages/SignupComp";
import LoginCand from "./pages/LoginCand";
import LoginComp from "./pages/LoginComp";
import Jobs from "./pages/Jobs";
import Profile from "./pages/profile";
import Company from "./pages/company";
import EditProfile from "./components/editProfile";
import EditCompany from "./components/editCompany";
import AddJobs from "./components/AddJobs";
import EditJob from "./components/editJob";
import axios from 'axios';

function App() {

  const [jobList, setjobList] = useState([]);

  const apiURL='http://localhost:5005/api/jobs'

  useEffect( ()=> {
     axios
    .get(apiURL)
    .then(responseFromAPI => {setjobList(responseFromAPI.data)})
    .catch(err => console.log('Error while getting the data: ', err))}, 
    []);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/signupcand' element={<SignupCand/>} />
          <Route path='/signupcomp' element={<SignupComp/>} />
          <Route path='/logincand'  element={<LoginCand/>} />
          <Route path='/logincomp'  element={<LoginComp/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/jobs'  element={<Jobs jobData={jobList}/>} />
          <Route path='/editProfile/:id'  element={<EditProfile/>} />
          <Route path='/editCompany/:id'  element={<EditCompany/>} />
          <Route path='/addJobs/'  element={<AddJobs/>} />
          <Route path='/editJob/:id'  element={<EditJob/>} />
      </Routes>
    </div>
  );
}

export default App;
