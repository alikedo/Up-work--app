import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignupCand from "./pages/SignupCand";
import SignupComp from "./pages/SignupComp";
import LoginCand from "./pages/LoginCand";
import LoginComp from "./pages/LoginComp";
import Jobs from "./pages/Jobs";

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
          <Route path='/jobs'  element={<Jobs/>} />
      </Routes>
    </div>
  );
}

export default App;
