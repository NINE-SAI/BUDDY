import React from "react"
class Message extends React.Component{
    state = {message:"GOOD"}
    mgHandler = ()=>{
                    this.setState({message:"GOOD MORNING"})
                    }
    ngHandler = ()=>{
                    this.setState({message:"GOOD NIGHT"})
                    }
    render(){
        return(
            <div>
                <h1>MESSAGE COMPONENT</h1>
                <hr/>
                <h1>Message :{this.state.message}</h1>
                <button onClick={this.mgHandler}>M</button>
                <button onClick={this.ngHandler}>N</button>
            </div>)
        }
}
export default Message