import React,{useState} from "react"
let Form = ()=>{
    let [state,setState] = useState({
        name:"",
        number:"",
        email:"",
        password:"",
        termsandconditions:false
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
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h1>REGESTRATION FOR OLA USERS</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input type="text" placeholder="name" className="form-control" name="name" onChange={eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="number" className="form-control" name="number" onChange={eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="email" className="form-control" name="email" onChange={eventHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="password" className="form-control" name="password" onChange={eventHandler}/>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>Terms & Conditions
                                    </div>
                                    <div>
                                        <input type="submit" className="btn-danger"/>
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