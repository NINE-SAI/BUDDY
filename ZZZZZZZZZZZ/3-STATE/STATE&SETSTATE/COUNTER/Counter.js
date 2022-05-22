import React from "react";
class Counter extends React.Component{
    state={counter:1}
    decHandler = ()=>{
                      this.setState({counter : this.state.counter - 1})
                     }
    incHandler = ()=>{
                      this.setState({counter : this.state.counter + 1})
                     }
    render(){
        return(
            <div>
                <div>COUNTER COMPONENT</div>
                <hr/>
                <h1>COUNTER :{this.state.counter}</h1>
                <button onClick={this.decHandler}>-</button>
                <button onClick={this.incHandler}>+</button>
            </div>
        )
    }
}
export default Counter