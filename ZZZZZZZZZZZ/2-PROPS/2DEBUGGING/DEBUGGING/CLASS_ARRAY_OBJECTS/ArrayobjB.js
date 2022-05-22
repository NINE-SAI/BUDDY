import React from "react";
class ArrayobjB extends React.Component{
    render(){
        return(
            <div>
                <h1>ARRAYOBJECT-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>
                    ID :{this.props.data[0].id}
                <hr/>
                    NAME :{this.props.data[0].name}
                <hr/>
                    ID :{this.props.data[1].name}
                <hr/>
                    NAME :{this.props.data[1].name}
                <hr/>
                </h1>
            </div>
        )
    }
}
export default ArrayobjB