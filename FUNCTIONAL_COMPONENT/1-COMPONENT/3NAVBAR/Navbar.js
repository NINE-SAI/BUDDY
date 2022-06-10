import {Link} from "react-router-dom"
let Navbar = ()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand text-white">OLA BOOKING</Link>
        </nav>
    )
}
export default Navbar