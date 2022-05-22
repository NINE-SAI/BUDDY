import React from "react"
class DrillingC extends React.Component{
    render(){
        return(
            <div>
                <h1>DRILLING-C</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr/>
            </div>
        )
    }
}
export default DrillingC