import React from "react";
class ClassB extends React.Component{
    render(){
        return(
            <div>
                <h1>COMPONENT-B</h1>
                <hr/>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr/>
                <h1>
                    NAME :{this.props.one}
                    <hr/>
                    NAME :{this.props.two}
                    <hr/>
                </h1>
            </div>
        )
    }
}
export default ClassB