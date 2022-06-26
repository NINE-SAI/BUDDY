import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Casa from '../ALL/3ITALIAN/Casa'
import Contatto from '../ALL/3ITALIAN/Contatto'
import Di from '../ALL/3ITALIAN/Di'
import Navbar from '../ALL/3ITALIAN/Navbar'
const Italian = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Casa/>}/>
            <Route path='/about' element={<Di/>}/>
            <Route path='/contact' element={<Contatto/>}/>
        </Routes>
    </Router>
  )
}
export default Italian