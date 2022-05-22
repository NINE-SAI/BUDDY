import React from "react";
class Product extends React.Component{
    state={
           name:"IPhone 6s",
           image:"https://th.bing.com/th/id/OIP.sjnlijwsBQ1jVlsnfyjVrQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
           quantity:1,
           price:50000
          }
    decHandler = ()=>{
        this.setState({quantity:this.state.quantity-1})
    }
    incHandler = ()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/home">IPhone 6s</a>
                </nav>
                <div>
                    <div className="container mt-5">
                        <div className="rows">
                            <div className="col-md-8">
                                <table className="table table-hover">
                                    <thead className="bg-dark text-white">
                                        <th>NAME</th>
                                        <th>IMAGE</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL PRICE</th>
                                    </thead>
                                    <tbody className="bg-success text-aqua">
                                        <tr>
                                            <td>{this.state.name}</td>
                                            <td><img src={this.state.image} width="100px"/></td>
                                            <td>{this.state.price}</td>
                                            <td>
                                                <i className="fa fa-minus-circle" onClick={this.decHandler}></i>
                                                {this.state.quantity}
                                                <i className="fa fa-plus-circle" onClick={this.incHandler}></i>
                                            </td>
                                            <td>{this.state.quantity*this.state.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Product