import React from "react";
import DrillingB from "./DrillingB"
class DrillingA extends React.Component{
    name = "9SAI"
    render(){
        return(
            <div>
                <h1>DRILLING-A</h1>
                <hr/>
                <DrillingB data={this.name}/>
                <hr/>
            </div>
        )
    }
}
export default DrillingA