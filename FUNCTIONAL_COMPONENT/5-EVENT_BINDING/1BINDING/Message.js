import React, { useState} from "react"
let Message = ()=>{
    let [wish,setWish] = useState({button:""})
    let eventHandler = (event)=>{
        setWish({button:event})        
     }
    return(
        <div>
            <h1>MESSAGE :{wish.button}</h1>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, "ROCK LIKE A ROCKSTAR")}>MORNING OLA</button>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, "FIGHT LIKE A MONSTAR")}>AFTERNOON OLA</button>
            <button className="bg-dark text-white" onClick={eventHandler.bind(this, "BE LIKE A STAR")}>NIGHT OLA</button>
        </div>
    )
}
export default Message