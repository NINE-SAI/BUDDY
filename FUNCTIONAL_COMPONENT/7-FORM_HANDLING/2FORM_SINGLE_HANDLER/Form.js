import React,{useState} from "react"
let Form = ()=>{
    let [state,setState] = useState({
        email:"",
        password:""
    })
    let eventHandler = (event)=>{
        setState({[event.target.name]:event.target.value})
    }
    let submitHandler = (event)=>{
        event.preventDefault()
    }
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/home" className="navbar-brand">OLA USERS</a>
            </nav>
            <div className="container mt-5">
                <pre>{JSON.stringify(state)}</pre>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="email" name="email" onChange={eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="password" name="password" onChange={eventHandler}/>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-success"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form