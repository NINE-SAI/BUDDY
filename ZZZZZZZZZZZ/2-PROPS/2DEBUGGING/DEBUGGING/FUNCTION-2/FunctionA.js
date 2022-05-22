import FunctionB from "./FunctionB"
let FunctionA = ()=>{
    let name="ANIL"
    return(
        <div>
            <h1>FUNCTION-A</h1>
            <FunctionB one={"9SAI"} two={name}/>
        </div>
    )
}
export default FunctionA