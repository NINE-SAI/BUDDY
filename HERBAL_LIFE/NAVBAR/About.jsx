import React from 'react'
import {Link} from 'react-router-dom'
// import Footer from '../BARS/Footer'
import Header from '../BARS/Header'
import Navbar from '../BARS/Navbar'

const About = () => {
  return (
    <div>

<Header/>
      {/* <header className='navbar'>
      <img src="https://assets.herbalifenutrition.com/content/dam/herbalife/sites/herbalife_nutrition/logos/herbalife-nut-green-small.png" alt="" className='ml-3' />
      <div className='ml-auto'>
        <Link to='/home' className='mr-3'>member login</Link>
        <Link to='/home'>find a member</Link>
        <span>
          <i className='fa fa-globe'></i>
          India
        </span>
      </div>
      </header> */}

<Navbar/>
      {/* <div className='navcss'>
        <nav className='navbar navbar-expand-lg'>
          <ul className='navbar-nav navbar-collapse'>
            <li className='nav-item'><Link to="/" className='nav-link'></Link></li>
            <li className='nav-item'><Link to="/home" className='nav-link'>HOME</Link></li>
            <li className='nav-item'><Link to="/all" className='nav-link'>ALL PRODUCTS</Link></li>
            <li className='nav-item'><Link to="/live" className='nav-link'>LIVE HEALTH</Link></li>
            <li className='nav-item'><Link to="/business" className='nav-link'>BUSINESS OPPORTUNITY</Link></li>
            <li className='nav-item'><Link to="/about" className='nav-link'>ABOUT US</Link></li>
            <li className='nav-item'><Link to="/buy" className='nav-link'>BUY PRODUCTS</Link></li>
          </ul>
        </nav>
      </div> */}


      <h1>ABOUT</h1>

{/* <Footer/> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className='mt-3' src="https://www.herbalife.co.in/content/dam/sites_structure/herbalife-nutrition/logos/herbalife-nut-green-small.png" alt="" width='120' height='50' />
              <h6 className='footerpara'>               
              © 2022 Herbalife International of America, Inc. No reproduction in whole 
              or in part without written permission. All Rights Reserved. All trademarks 
              and product images exhibited on this site, unless otherwise indicated, 
              are the property of Herbalife International, Inc.
              </h6>
            </div>
            <div className="col-md-6">
              <center>
                <h6 className='mt-3'>INFORMATION</h6>
                <i className='fa fa-facebook sai'></i>
                <i className='fa fa-twitter sai'></i>
                <i className='fa fa-instagram sai'></i>
                <i className='fa fa-youtube sai'></i>
                <Link to='/contact' className='mt-3 footerlink'>Contact Us</Link><br />
                <Link to='/terms' className='footerlink'>Terms of Use</Link><br />
                <Link to='/privacy' className='footerlink'>Privacy Policy</Link><br />
                <Link to='/corporate' className='footerlink'>Corporate Opportunities</Link><br />
                <Link to='/career' className='footerlink'>Career Opportunities</Link>
              </center>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default About
