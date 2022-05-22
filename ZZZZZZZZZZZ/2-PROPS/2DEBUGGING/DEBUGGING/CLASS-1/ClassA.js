import React from "react"
import ClassB from "./ClassB"
class ClassA extends React.Component{
    name = "9SAI"
    render(){
        return(
            <div>
                <h1>COMPONENT-A</h1>
                <hr/>
                <ClassB one={"ANIL"} two={this.name}/>
            </div>
        )
    }
}
export default ClassA