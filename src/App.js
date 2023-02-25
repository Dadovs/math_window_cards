import React from "react";
import Addition from "./Components/Addition";
import Multiplication from "./Components/Multiplication";
import Subtraction from "./Components/Subtraction";
import Division from "./Components/Division";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {Routes, Route} from "react-router-dom"
import Addition2 from "./Components/Addition2";
import Multiplication2 from "./Components/Multiplication2";
import Subtraction2 from "./Components/Subtraction2";
import Division2 from "./Components/Division2";

function App() {
  return (
    <>
     <Navbar />
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a1' element={<Addition/>}/>
        <Route path='/a2' element={<Addition2/>}/>
      <Route path='/s1' element={<Subtraction/>}/>
        <Route path='/s2' element={<Subtraction2/>}/>
      <Route path='/m1' element={<Multiplication/>}/>
        <Route path='/m2' element={<Multiplication2/>}/>
      <Route path='/d1' element={<Division/>}/>
        <Route path='/d2' element={<Division2/>}/>
    </Routes>



    </>
  );
}

export default App;
