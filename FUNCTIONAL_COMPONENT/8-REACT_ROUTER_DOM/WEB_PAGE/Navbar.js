import React from "react"
import {Link} from "react-router-dom"
let Navbar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">OLA USERS</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/home" className="nav-link">HOME</Link></li>
                        <li className="nav-item"><Link to="/aboutus" className="nav-link">ABOUTUS</Link></li>
                        <li className="nav-item"><Link to="/contactus" className="nav-link">CONTACTUS</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar