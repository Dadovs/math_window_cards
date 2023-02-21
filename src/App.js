import React from "react";
import Addition from "./Components/Addition";
import Multiplication from "./Components/Multiplication";
import Subtraction from "./Components/Subtraction";
import Division from "./Components/Division";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
     <Navbar />
     {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a1' element={<Addition/>}/>
      <Route path='/s1' element={<Subtraction/>}/>
      <Route path='/m1' element={<Multiplication/>}/>
      <Route path='/d1' element={<Division/>}/>
    </Routes>

    </>
  );
}

export default App;
