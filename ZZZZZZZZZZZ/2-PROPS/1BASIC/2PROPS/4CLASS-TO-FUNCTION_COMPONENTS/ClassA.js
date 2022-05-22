import React from "react"
import FunctionB from "./FunctionB"
class ClassA extends React.Component{
    render(){
        return(
            <div>
                <h1>CLASS-A</h1>
                <FunctionB/>
            </div>
        )
    }
}
export default ClassA