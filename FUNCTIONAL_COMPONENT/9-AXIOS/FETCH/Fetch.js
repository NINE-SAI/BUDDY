import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
let Fetch = ()=>{
    let [state,setState] = useState([""])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        
            .then((response) => response.json())
            
            .then((response) => {
                console.log(response)
                setState(response)
            })
    
    })
    return(
            <>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/home" className="navbar-brand">OLA USERS DETAILS</Link>
            </nav>
            <div className="container mt-5">
                <pre>{JSON.stringify(state)}</pre>
                <div className="row">
                   {
                       state.length > 0 ? <>
                         <div className="col-md-6">
                        <table className="table table-hover table-striped">
                            <thead className="bg-dark text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                state.map((user)=>{
                                    return<tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                })
                            }
                                </tbody>
                            </table>
                    </div>
                       </> : "NULL"
                   }
                </div>
            </div>
        </>
    )
}
export default Fetch