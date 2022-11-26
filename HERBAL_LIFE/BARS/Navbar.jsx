import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navcss'>
        <nav className='navbar navbar-expand-lg'>
          <ul className='navbar-nav navbar-collapse'>
            <li className='nav-item navlist'><Link to="/" className='nav-link links'></Link></li>
            <li className='nav-item navlist'><Link to="/home" className='nav-link links'>HOME</Link></li>
            <li className='nav-item navlist'><Link to="/all" className='nav-link links'>ALL PRODUCTS</Link></li>
            <li className='nav-item navlist'><Link to="/live" className='nav-link links'>LIVE HEALTH</Link></li>
            <li className='nav-item navlist'><Link to="/business" className='nav-link links'>BUSINESS OPPORTUNITY</Link></li>
            <li className='nav-item navlist'><Link to="/about" className='nav-link links'>ABOUT US</Link></li>
            <li className='nav-item navlist'><Link to="/buy" className='nav-link links'>BUY PRODUCTS</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar