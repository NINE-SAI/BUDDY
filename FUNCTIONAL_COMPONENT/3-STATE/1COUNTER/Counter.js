import React, {useState} from "react"
let Counter = ()=>{
        let [a,b] = useState({counter:1})
    
    let decHandler = ()=>{
        b({...a, counter:a.counter-1})
    }

    return(
        <div>
            <button className="bg-dark text-white" onClick={decHandler}>-</button>
            <h1>{a.counter}</h1>
            <button className="bg-dark text-white" onClick={()=>{                       // WE CAN USE ONCLICK EVENT DIRECTLY OR NORMALLY
                b({...a, counter:a.counter+1})
            }}>+</button>
        </div>
    )
    }
export default Counter