import React from "react"
class CardA extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/home" className="navbar-brand">9SAI</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list">
                            <a className="nav-link" href="/home">HOME</a>
                        </li>
                        <li className="nav-list">
                            <a className="nav-link" href="/home">ABOUT</a>
                        </li>
                        <li className="nav-list">
                            <a className="nav-link" href="/home">SERVICES</a>
                        </li>
                        <li className="nav-list">
                            <a className="nav-link" href="/home">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default CardA