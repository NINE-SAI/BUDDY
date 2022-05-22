import React from "react"
class Employee extends React.Component{
    id = 101
    name = "9SAI"
    personal = {city:"KADAPA",salary:50000}
    render () {
        return (
            <div>
                <h2>EMPLOYEE ID :{this.id}</h2>
                <hr/>
                <h2>EMPLOYEE NAME :{this.name}</h2>
                <hr/>
                <h2>
                    EMPLOYEE CITY :{this.personal.city}
                    <hr/>
                    EMPLOYEE SALARY :{this.personal.salary}
                </h2>
            </div>
        )
    }
}
export default Employee