import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() { 
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">
          CONTACT APP
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/home" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link to="/contacts" className="nav-link">CONTACTS</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar