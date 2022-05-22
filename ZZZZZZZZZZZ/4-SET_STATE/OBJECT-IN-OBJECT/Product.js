import React from "react";
class Product extends React.Component{
    state={
            product:{
                      name:"IPhone 6s",
                      image:"https://th.bing.com/th/id/OIP.sjnlijwsBQ1jVlsnfyjVrQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
                      price:50000,
                      quantity:1
                    }
          }
    decHandler = ()=>{
        this.setState({product:{...this.state.product,
                       quantity:this.state.product.quantity-1}})
    }
    incHandler = ()=>{
        this.setState({product:{...this.state.product,
                       quantity:this.state.product.quantity+1}})
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/home">PRODUCT</a>
                </nav>
                <div>
                    <div className="container mt-5">
                        <div className="rows">
                            <div className="col-md-8">
                                <table className="table table-hover">
                                    <thead className="bg-dark text-white">
                                       <tr>
                                        <th>NAME</th>
                                        <th>IMAGE</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.product.name}</td>
                                            <td><img src={this.state.product.image} width="100px"/></td>
                                            <td>{this.state.product.price}</td>
                                            <td>
                                                <i className="fa fa-minus-circle" onClick={this.decHandler}></i>
                                                {this.state.product.quantity}
                                                <i className="fa fa-plus-circle" onClick={this.incHandler}></i>
                                            </td>
                                            <td>{this.state.product.quantity*this.state.product.price}</td>
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