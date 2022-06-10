import React from "react"
let CompB = (props)=>{
    return(
        <div>
            <h1>BYE TO OLA</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h1>NAME :{props.one}</h1>
            <h1>NAME :{props.two}</h1>
        </div>
    )
}
export default CompB