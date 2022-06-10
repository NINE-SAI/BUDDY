import React from "react"
import CompB from "./CompB"
let CompA = ()=>{
    let name = "9SAI"
    return(
        <div>
            <h1>WELCOME TO OLA</h1>
            <CompB one={"ANIL"} two={name}/>
        </div>
    )
}
export default CompA