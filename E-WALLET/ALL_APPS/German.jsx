import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Heim from '../ALL/4GERMAN/Heim'
import Kontakt from '../ALL/4GERMAN/Kontakt'
import Navbar from '../ALL/4GERMAN/Navbar'
import Um from '../ALL/4GERMAN/Um'
const German = () => {
  return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Heim/>}/>
                <Route path='/about' element={<Um/>}/>
                <Route path='/contact' element={<Kontakt/>}/>
            </Routes>
        </Router>
    )
}

export default German