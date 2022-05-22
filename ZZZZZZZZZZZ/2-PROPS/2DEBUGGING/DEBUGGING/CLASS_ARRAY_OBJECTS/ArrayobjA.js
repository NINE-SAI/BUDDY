import React from "react";
import ArrayobjB from "./ArrayobjB"
class ArrayobjA extends React.Component{
    employees=[{id:101,name:"9SAI"},
               {id:102,name:"ANIL"}]
    render(){
        return(
            <div>
                <h1>ARRAYOBJECT-A</h1>
                <ArrayobjB data={this.employees}/>
            </div>
        )
    }
}
export default ArrayobjA