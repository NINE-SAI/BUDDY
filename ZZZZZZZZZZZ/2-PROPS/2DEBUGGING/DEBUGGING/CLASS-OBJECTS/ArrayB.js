import React from "react"
class ArrayB extends React.Component{
    render(){
        return(
            <div>
                <h1>ARRAY-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>
                    SIZE :{this.props.data[0]}
                    <hr/>
                    SIZE :{this.props.data[1]}
                    <hr/>
                    SIZE :{this.props.data[2]}
                </h1>
            </div>
        )
    }
}
export default ArrayB