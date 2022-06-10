import {Link} from "react-router-dom"
let Navbar = ()=>{
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/home" className="navbar-brand">OLA</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/home" className="nav-link">HOME</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">ABOUT</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar