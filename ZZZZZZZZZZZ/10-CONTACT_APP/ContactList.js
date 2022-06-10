import React from "react";
import Axios from "axios"

class ContactList extends React.Component{
    constructor (props){
        super(props)
        this.state = {users:[]}
    } 
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            this.setState({users:response.data})
        })
        .catch((error)=>{
            this.this.setState({users:error.data})
        })
    }
        render(){
        return(
            <>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state.users)}</pre>
                <div className="row">
                    {
                        this.state.users.length > 0 ? <React.Fragment>
                            <div className="col-md-8">
                                <table className="table table-hover">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((users)=>{
                                                return <tr key={users.id}>
                                                            <td>{users.id}</td>
                                                            <td>{users.name}</td>
                                                            <td>{users.email}</td>
                                                        </tr>
                                            })
                                        }
                                       
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment> : "KCPD"
                    }
                </div>
            </div>

            </>
        )
    }
}
export default ContactList