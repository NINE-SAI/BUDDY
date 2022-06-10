import React, {useState} from "react"
let Hike = ()=>{
    let [state,setState] = useState({button:"50000"})
    let eventHandler = (event)=>{
        setState({button:50000+event})
    }
    return(
        <div>
            <h1>SALARY :{state.button}</h1>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, 0)}>0K</button>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, 10000)}>10K</button>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, 20000)}>20K</button>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, 30000)}>30k</button>
        </div>
    )
}
export default Hike