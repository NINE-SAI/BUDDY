import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import About from "../ALL/1ENGLISH/About";
import Contact from "../ALL/1ENGLISH/Contact";
import Home from "../ALL/1ENGLISH/Home";
import Navbar from "../ALL/1ENGLISH/Navbar";

let English = () => {
  return (
    <div>
      <Router>
       <Navbar/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
      </Router>
    </div>
  );
};
export default English
