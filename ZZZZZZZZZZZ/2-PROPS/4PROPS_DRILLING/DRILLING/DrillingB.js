import React from "react";
import DrillingC from "./DrillingC"
class DrillingB extends React.Component{
    render(){
        return( 
            <div>
                <h1>DRILLING-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr/>
                <DrillingC data={this.props.data}/>
            </div>
        )
    }
}
export default DrillingB