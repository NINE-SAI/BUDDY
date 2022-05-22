import React from "react"
class BindingHIKE extends React.Component{
   state = {salary:50000}
   eventHandler = (hike)=>{
       this.setState({salary:50000+hike})
   }
   render (){
       return(
           <div>
               <h1>BINDING</h1>
               <h1>SALARY :{this.state.salary}</h1>
               <button onClick={this.eventHandler.bind(this, 0)} className="btn-danger">NO HIKE</button>
               <button onClick={this.eventHandler.bind(this, 10000)} className="btn-success">HIKE 10K</button>
               <button onClick={this.eventHandler.bind(this, 20000)} className="btn-primary">HIKE 20K</button>
               <button onClick={this.eventHandler.bind(this, 30000)} className="btn-warning">HIKE 30K</button>
           </div>
       )
   }
}
export default BindingHIKE