import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import About from './HERBAL_LIFE/NAVBAR/About'
import All from './HERBAL_LIFE/NAVBAR/All'
import Business from './HERBAL_LIFE/NAVBAR/Business'
import Buy from './HERBAL_LIFE/NAVBAR/Buy'
import Home from './HERBAL_LIFE/NAVBAR/Home'
import Live from './HERBAL_LIFE/NAVBAR/Live'
import Mainpage from './HERBAL_LIFE/NAVBAR/Mainpage'

import Contact from './HERBAL_LIFE/FOOTERS/Contact'
import Terms from './HERBAL_LIFE/FOOTERS/Terms'
import Privacy from './HERBAL_LIFE/FOOTERS/Privacy'
import Corporate from './HERBAL_LIFE/FOOTERS/Corporate'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/all' element={<All/>}/>
          <Route path='/live' element={<Live/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/corporate' element={<Corporate/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App