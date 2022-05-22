import React from "react";
class Binding extends React.Component{
    state={button:" "}
    eventHandler = (button)=>{
       this.setState({
           button:button
       })        
    }
    render(){
        return(
            <div>
                <h1>BINDING COMPONENT</h1>
                <h1>MESSAGE :{this.state.button}</h1>
                <button className="btn-primary" onClick={this.eventHandler.bind(this, "GOOD MORNING")}>M</button>""
                <button className="btn-success" onClick={this.eventHandler.bind(this, "GOOD AFTERNOON")}>A</button>""
                <button className="btn-warning" onClick={this.eventHandler.bind(this, "GOOD NIGHT")}>N</button>
            </div>
        )
    }
}
export default Binding