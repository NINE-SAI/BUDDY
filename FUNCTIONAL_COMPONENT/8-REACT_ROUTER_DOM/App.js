import React from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Aboutus from "./FUNCTIONAL_COMPONENT/8-REACT_ROUTER_DOM/WEB_PAGE/Aboutus"
import Contactus from "./FUNCTIONAL_COMPONENT/8-REACT_ROUTER_DOM/WEB_PAGE/Contactus"
import Navbar from "./FUNCTIONAL_COMPONENT/8-REACT_ROUTER_DOM/WEB_PAGE/Navbar"
import Home from "./FUNCTIONAL_COMPONENT/8-REACT_ROUTER_DOM/WEB_PAGE/Home"
let App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
      </Router>
    </div> 
  )
}
export default App