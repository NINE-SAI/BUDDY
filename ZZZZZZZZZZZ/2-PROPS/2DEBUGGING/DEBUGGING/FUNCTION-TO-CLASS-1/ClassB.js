import React from "react"
class ClassB extends React.Component{
    render(){
        return(
            <div>
                <h1>CLASS-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>
                    NAME :{this.props.one}
                    <hr/>
                    NAME :{this.props.two}
                </h1>
            </div>
        )
    }
}
export default ClassB