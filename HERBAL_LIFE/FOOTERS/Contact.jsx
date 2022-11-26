import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../BARS/Footer";
import Header from "../BARS/Header";
import Navbar from "../BARS/Navbar";

const Contact = () => {
  return (
    <div>
      <Header/>
      {/* <header className="navbar">
        <img
          src="https://assets.herbalifenutrition.com/content/dam/herbalife/sites/herbalife_nutrition/logos/herbalife-nut-green-small.png"
          alt=""
          className="ml-3"
        />
        <div className="ml-auto">
          <Link to="/home" className="mr-3">
            member login
          </Link>
          <Link to="/home">find a member</Link>
          <span>
            <i className="fa fa-globe"></i>
            India
          </span>
        </div>
      </header> */}

      <Navbar/>
      {/* <div className="navcss">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav navbar-collapse">
            <li className='nav-item navlist'><Link to="/" className='nav-link'></Link></li>
            <li className='nav-item navlist'><Link to="/home" className='nav-link'>HOME</Link></li>
            <li className='nav-item navlist'><Link to="/all" className='nav-link'>ALL PRODUCTS</Link></li>
            <li className='nav-item navlist'><Link to="/live" className='nav-link'>LIVE HEALTH</Link></li>
            <li className='nav-item navlist'><Link to="/business" className='nav-link'>BUSINESS OPPORTUNITY</Link></li>
            <li className='nav-item navlist'><Link to="/about" className='nav-link'>ABOUT US</Link></li>
            <li className='nav-item navlist'><Link to="/buy" className='nav-link'>BUY PRODUCTS</Link></li>
          </ul>
        </nav>
      </div> */}

      <div className="container">
        <center>
          <h2 className="mt-5">Contact Us</h2>
          <h5 className="my-5">For questions or assistance please:</h5>
        </center>
        <div className="col-md-10">
          <h2>Ask your Associate</h2>
          <h6 className="my-3 contacttext">
            We encourage you to speak with your local Independent Herbalife
            Nutrition Associate for the most thorough answers to questions about
            our products or business opportunity.
          </h6>
          <h2>Redressal Enquiry</h2>
          <h6 className="mt-3 contacttext">
            For Consumer Complaints contact Distributor Services Officer and
            Grievance Redressal Committee:
          </h6>
          <h6 className="mt-3 contacttext">
            Herbalife Internatinal India Pvt. Ltd.
          </h6>
          <h6 className="contacttext">
            RMZ Pinnacle, No. 15, Commissariat Road,
          </h6>
          <h6 className="contacttext">Bangalore - 560025, Karnataka, India.</h6>
          <h6 className="mt-3 contacttext">Phone: 080-40311444</h6>
          <h6 className="contacttext">Email: writetous@herbalife.com</h6>
          <h6 className="mt-3 contacttext">Business Hours:</h6>
          <h6 className="mb-5 contacttext">
            Monday through Saturday, 10:00am - 6:00pm
          </h6>
        </div>
      </div>

      <div className="contactback">
        <div className="container">
          <div className="col-md-12">
            <h2 className="mt-5">TRACK YOUR COMPLAINTS HERE</h2>
            <h6 className="mt-3 contacttext">Complaints number*</h6>
              <input type="text" className="contactinput" placeholder="Enter inquiry id here" />
              <button className="bg-success contactinbut">SEND</button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="col-md-10">
          <h2>Interested in Products</h2>
          <h6 className="my-3">https://contact.herbalife.co.in/</h6>
          <h2>Become an Independent Herbalife Nutrition Associate</h2>
          <h6 className="my-3">
            https://contact.herbalife.co.in/?leadType=bo{" "}
          </h6>
        </div>
      </div>

      {/* <Footer/> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="mt-3" src="https://www.herbalife.co.in/content/dam/sites_structure/herbalife-nutrition/logos/herbalife-nut-green-small.png" alt="" width="120" height="50"/>
              <h6 className="footerpara">
              © 2022 Herbalife International of America, Inc. No reproduction
              in whole or in part without written permission. All Rights
              Reserved. All trademarks and product images exhibited on this
              site, unless otherwise indicated, are the property of Herbalife
              International, Inc.
              </h6>
            </div>
            <div className="col-md-6">
              <center>
                <h6 className="mt-3">INFORMATION</h6>
                <i className="fa fa-facebook sai"></i>
                <i className="fa fa-twitter sai"></i>
                <i className="fa fa-instagram sai"></i>
                <i className="fa fa-youtube sai"></i>
                <Link to="/contact" className="mt-3 footerlink">Contact Us</Link><br />
                <Link to="/terms" className="footerlink">Terms of Use</Link><br />
                <Link to="/privacy" className="footerlink">Privacy Policy</Link><br />
                <Link to="/corporate" className="footerlink">Corporate Opportunities</Link><br />
                <Link to="/career" className="footerlink">Career Opportunities</Link>
              </center>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
