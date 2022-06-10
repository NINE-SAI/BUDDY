import React, { useState } from "react";
let Form = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let emailHandler = (event) => {
    setState({ email: event.target.value });
    console.log(event.target.value)
  };
  let passwordHandler = (event) => {
    setState({ password: event.target.value });
    console.log(event.target.value)
  };
  let submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          OLA USERS
        </a>
      </nav>
      <div className="container mt-5">
        <pre>{JSON.stringify(state)}</pre>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input className="form-control" type="text"  
                    onChange={emailHandler} placeholder="email"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" 
                     onChange={passwordHandler} placeholder="password"/>
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
  );
};
export default Form;
