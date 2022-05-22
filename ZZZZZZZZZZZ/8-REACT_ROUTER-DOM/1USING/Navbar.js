import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">REACT_ROUTER_DOM</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list">
                            <Link to="/home" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-list">
                            <Link to="/about" className="nav-link">ABOUT</Link>
                        </li>
                        <li className="nav-list">
                            <Link to="/contact" className="nav-link">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar