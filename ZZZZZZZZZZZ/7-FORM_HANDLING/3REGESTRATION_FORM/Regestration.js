import React from "react";
class Regestration extends React.Component{
    state={
            name:"",
            number:"",
            email:"",
            password:"",
            termsconditions:false
          }
          eventHandler = (event)=>{
            this.setState({[event.target.name]:event.target.value})
        }
    submitHandler = (event)=>{
            event.preventDefault()
    }
    render(){
        return(
            <>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/home" className="navbar-brand">REGESTRATION</a>
            </nav>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="name" name="name" onChange={this.eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                         <input className="form-control" type="type" placeholder="number" name="number" onChange={this.eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="email" type="email" name="email" onChange={this.eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="password" type="password" name="password" onChange={this.eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="radio" name="termsconditions" onChange={this.eventHandler}/>terms&conditions
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Regestration