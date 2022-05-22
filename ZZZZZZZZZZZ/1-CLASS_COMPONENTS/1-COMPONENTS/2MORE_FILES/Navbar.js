import React from "react";
class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#">9SAI</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-lilst">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className='nav-list' href='#'>
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar