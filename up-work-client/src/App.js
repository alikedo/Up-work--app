import React from "react";
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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/signupcand' element={<SignupCand/>} />
          <Route path='/signupcomp' element={<SignupComp/>} />
          <Route path='/logincand'  element={<LoginCand/>} />
          <Route path='/logincomp'  element={<LoginComp/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/jobs'  element={<Jobs/>} />
          <Route path='/editProfile/:id'  element={<EditProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
