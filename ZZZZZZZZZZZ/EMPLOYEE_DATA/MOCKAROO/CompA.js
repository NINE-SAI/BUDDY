import React from "react";
import CompB from "./CompB"
class CompA extends React.Component{
    employees = [{id:101,name:"9SAI",salary:50000},{id:102,name:"ANIL",salary:50000}]
    render(){
        return(
            <div>
                <CompB data={this.employees}/>
            </div>
        )
    }
}
export default CompA