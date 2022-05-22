import React from "react";
class SingleH extends React.Component{
    state={email:"",password:""}
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
                <a href="/home" className="navbar-brand">FORM HANDLING WITH SINGLE HANDLER</a>
            </nav>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="email" name="email" onChange={this.eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="password" name="password" onChange={this.eventHandler}/>
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
export default SingleH