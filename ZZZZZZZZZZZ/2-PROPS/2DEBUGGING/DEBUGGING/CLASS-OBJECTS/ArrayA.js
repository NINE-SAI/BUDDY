import React from "react"
import ArrayB from "./ArrayB"
class ArrayA extends React.Component{
    size=[28,30,32]
    render(){
        return(
            <div>
                <h1>ARRAY-A</h1>
                <ArrayB data={this.size}/>
            </div>
        )
    }
}
export default ArrayA