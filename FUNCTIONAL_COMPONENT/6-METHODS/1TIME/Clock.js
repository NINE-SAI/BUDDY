import React, { useState, useEffect } from "react";
let Clock = () => {
  let [state, setState] = useState({
    currentTime: new Date().toLocaleTimeString(),
  });

  useEffect(()=>{
      setInterval(()=>{
          setState({currentTime: new Date().toLocaleTimeString()})
      })
  })    
 

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">OLA TIMINGS</a>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1 className="bg-dark text-white">
                  TIME--{state.currentTime}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clock;
