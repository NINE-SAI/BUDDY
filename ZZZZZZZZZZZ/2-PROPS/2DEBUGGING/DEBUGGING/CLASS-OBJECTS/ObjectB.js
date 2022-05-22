import React from "react";
class ObjectB extends React.Component{
    render(){
        return(
            <div>
                <h1>OBJECT-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>
                    ID :{this.props.data.id}
                    <hr/>
                    NAME :{this.props.data.name}
                </h1>
            </div>
        )
    }
}
export default ObjectB