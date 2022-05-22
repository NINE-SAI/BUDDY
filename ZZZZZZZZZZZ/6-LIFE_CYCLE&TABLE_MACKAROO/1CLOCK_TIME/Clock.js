import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
        }
    componentDidMount(){
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()})
        },1000)
        }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/home" className="navbar-brand">REACT LIFE CYCLE METHOD</a>
                </nav>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h1>Clock</h1>
                                </div>
                                <div className="card-body bg-primary text-white">
                                    <h1>TIME -- {this.state.currentTime}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clock