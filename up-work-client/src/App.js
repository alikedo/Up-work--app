import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

import Login from "./pages/Login";

import Jobs from "./pages/Jobs";
import Profile from "./pages/profile";
import Company from "./pages/company";
import EditProfile from "./components/editProfile";
import EditCompany from "./components/editCompany";
import AddJobs from "./components/AddJobs";
import EditJob from "./components/editJob";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function App() {

  const [jobList, setjobList] = useState([]);
  

  const getAllJobs = () => {
    const storedToken = localStorage.getItem("authToken");
 

  axios
    .get(
    `${API_URL}/api/jobs`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => setjobList(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
  }, [] );

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/signup' element={<Signup/>} />

          <Route path='/login'  element={<Login/>} />

          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/jobs'  element={<Jobs jobData={jobList}/>} />
          <Route path='/editProfile/:id'  element={<EditProfile/>} />
          <Route path='/editCompany/:id'  element={<EditCompany/>} />
          <Route path='/addJobs/'  element={<AddJobs/>} />
          <Route path='/editJob/:jobId'  element={<EditJob/>} />
      </Routes>
    </div>
  );
}

export default App;
