import React from "react";
class Form extends React.Component{
    state={email:"",password:""}
    emailHandler = (event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/home" className="navbar-brand">FORM HANDLING</a>
            </nav>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="email" onChange={this.emailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="password" onChange={this.passwordHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-success"/>
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
export default Form