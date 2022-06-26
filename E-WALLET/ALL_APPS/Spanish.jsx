import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Contacto from '../ALL/2SPANISH/Contacto'
import Hogar from '../ALL/2SPANISH/Hogar'
import Navbar from '../ALL/2SPANISH/Navbar'
import Sobre from '../ALL/2SPANISH/Sobre'
const Spanish = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='home' element={<Hogar/>}/>
            <Route path='about' element={<Sobre/>}/>
            <Route path='contact' element={<Contacto/>}/>
        </Routes>
    </Router>
  )
}
export default Spanish