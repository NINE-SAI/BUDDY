import React from "react";
import {Link}from 'react-router-dom'
import axios from "axios"
class Data extends React.Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then((response)=>{
                this.setState({users:response.data})
             })
             .catch((error)=>{
                 console.log(error)
             })
    }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/home" className="navbar-brand">AXIOS</Link>
        </nav>
        <div className="container mt-5">
            <pre>{JSON.stringify(this.state.users)}</pre>
                <div className="row">
                    {
                        this.state.users.length > 0 ? <>
                          <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>AXIOS DATA</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((users)=>{
                                                return<tr key={users.id}>
                                                    <td>{users.id}</td>
                                                    <td>{users.name}</td>
                                                    <td>{users.email}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                        </> : null
                    } 
                </div>
        </div>
      </>
    )
  }
}
export default Data;