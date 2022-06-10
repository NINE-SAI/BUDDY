import React from "react"
import Home from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/4NAVBAR_PAGES/Home"
import About from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/4NAVBAR_PAGES/About"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/4NAVBAR_PAGES/Navbar";
//import Navbar from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/3NAVBAR/Navbar";
//import Message from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/2READ/Message";
//import Anil from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/1USE/ANIL";
//import SAI from "./FUNCTIONAL_COMPONENT/1/1_USE_READ_NAVBAR/1USE/SAI";
let App = () => {
  return (
    <div>
    {/*  <SAI/> */}
    {/* <Anil/> */}
    {/* <Message/> */}
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
    </div>
  )
}
export default App