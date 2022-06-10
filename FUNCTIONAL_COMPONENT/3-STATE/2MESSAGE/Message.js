import React,{useState} from "react"
let Message = ()=>{
    let [state,setState] = useState({wish:"OLA"})
    let gHandler = ()=>{
        setState({wish:"GOOD TO GO OLA"})
    }
    let bHandler = ()=>{
        setState({wish:"BAD TO GO OLA"})
    }
    return(
        <div>
            <h1>MESSAGE :{state.wish}</h1>
            <button onClick={gHandler}>GOOD</button>
            <button onClick={bHandler}>BAD</button>
        </div>
    )
}
export default Message