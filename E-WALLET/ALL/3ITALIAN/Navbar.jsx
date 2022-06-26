import React from "react";
import {Link} from "react-router-dom"
const Navbar = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#cfcf"}}>
            <h6><i  className="navbar-brand">E-WALLET</i></h6>
            <div className="mr-auto navbar-collapse">
                <ul className="navbar-collapse">
                    <i className="nav-item mr-3"><Link to="/home"><i className="fa fa-home"></i>CASA</Link></i>
                    <i className="nav-item mr-3"><Link to="/about"><i className="fa fa-info-circle"></i>DI</Link></i>
                    <i className="nav-item mr-5"><Link to="/contact"><i className="fa fa-hand-o-right"></i>CONTACTTO</Link></i>
                        <Link to='/login'></Link><button className='btn mr-2 nav-link'>Accesso</button>
                </ul>
                    <h4><i className="fas fa-wallet">Portafoglio 0.0</i></h4>
            </div>   
        </nav>
        </>
    )
}
export default Navbar