import React from "react";
import CompB from "./CompB"
let CompA = ()=>{
    let customers = [
        {id:101,name:"9SAI"},
        {id:102,name:"ANIL"}
    ]
    return(
        <div>
            <h1>WELCOME TO OLA</h1>
            <CompB one={customers}/>
        </div>
    )
}
export default CompA