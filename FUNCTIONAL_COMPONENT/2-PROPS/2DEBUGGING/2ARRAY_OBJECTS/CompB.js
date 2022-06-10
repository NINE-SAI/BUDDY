import React from "react";
let CompB = (props)=>{
    return(
        <div>
            <h1>BYE TO OLA</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h1>ID :{props.one[0].id}</h1>
            <h1>ID :{props.one[1].id}</h1>
            <h1>NAME :{props.one[0].name}</h1>
            <h1>NAME :{props.one[1].name}</h1>
        </div>
    )
}
export default CompB