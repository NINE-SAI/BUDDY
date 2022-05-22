import React from "react";
class Double extends React.Component {
    state={
        value:{
            email:" ",
            password:" "
        }
    }
        
    
    updateHandler=(event)=>{
     
            this.setState({
                [event.target.name]:event.target.value
            })
        
    }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/home">
            DOUBLE OBJECT
          </a>
        </nav>
        <div className="container mt-5">
            <pre>{JSON.stringify(this.state.value)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h1>REGESTRATION</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input onChange={this.updateHandler} name="email" className="form-control" type="text" placeholder="email"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.updateHandler} name="password" className="form-control" type="text" placeholder="password"/>
                                </div>
                                <div>
                                    <input className="btn btn-success" type="submit" value="Login..."/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}
export default Double;