import React from "react";

class ContactDetails extends React.Component{
    render(){
        return(
            <pre>{JSON.stringify(this.props)}</pre>
        )
    } 
}
export default ContactDetails