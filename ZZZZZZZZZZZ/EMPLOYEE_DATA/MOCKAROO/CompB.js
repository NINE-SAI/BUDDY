import React from "react";
class CompB extends React.Component{
    render(){
        return(
            <div>
                <h1>{JSON.stringify(this.props)}</h1>
                {
                    this.props.user.map(()=>{
                        return (
                        <tr>
                            <td>{this.props.user.id}</td>
                            <td>{this.props.user.name}</td>
                        </tr>
                        document.getElementById("id").innerHTML
                        )
                    })
                }
            </div>
        )
    }
}
export default CompB