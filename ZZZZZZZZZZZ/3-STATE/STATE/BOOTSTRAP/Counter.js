import React from "react";
class Counter extends React.Component{
    state={counter:1}
    decHandler = ()=>{
        this.setState({counter: this.state.counter-1})
    }
    incHandler = ()=>{
        this.setState({counter: this.state.counter+1})
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/home" className="navbar-brand">COUNTER</a>
                </nav>
                <div className="container mt-5">
                    <div className="rows">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="bg-dark text-white">COUNTER</h1>
                                </div>
                                <div className="card-body">
                                    <button onClick={this.decHandler} className="bg-warning">-</button>
                                    {this.state.counter}
                                    <button onClick={this.incHandler} className="bg-primary">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter