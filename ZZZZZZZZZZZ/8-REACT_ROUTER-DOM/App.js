import React from 'react'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navbar from "./8-REACT_ROUTER-DOM/1USING/Navbar"
import Home from "./8-REACT_ROUTER-DOM/1USING/Home"
import About from "./8-REACT_ROUTER-DOM/1USING/About"
import Contact from "./8-REACT_ROUTER-DOM/1USING/Contact"
 const App = () => {
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
  )
}
export default App