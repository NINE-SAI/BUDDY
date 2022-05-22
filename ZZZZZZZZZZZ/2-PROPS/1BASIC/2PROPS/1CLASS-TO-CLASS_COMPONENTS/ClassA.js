import React from "react";
import ClassB from "./ClassB";
class ClassA extends React.Component{
    render(){
        return(
            <div>
                <h1>CLASS-A</h1>
                <ClassB/>
            </div>
        )
    }
}
export default ClassA