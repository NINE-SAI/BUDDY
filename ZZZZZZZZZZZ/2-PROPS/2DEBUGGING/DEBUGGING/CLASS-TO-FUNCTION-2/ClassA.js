import React from "react"
import FunctionB from "./FunctionB"
class ClassA extends React.Component{
    name="TEJA"
    render(){
        return(
            <div>
                <h1>CLASS-A</h1>
                <FunctionB one={"KIRAN"} two={this.name}/>
            </div>
        )
    }
}
export default ClassA