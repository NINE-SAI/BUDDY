import React from "react";
import ObjectB from "./ObjectB"
class ObjectA extends React.Component{
    employee={id:101,name:"9SAI"}
    render(){
        return(
            <div>
                <h1>OBJECT-A</h1>
                <ObjectB data={this.employee}/>
            </div>
        )
    }
}
export default ObjectA