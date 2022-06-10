import React, {useState} from "react"
let Product = ()=>{
    let [product,setProduct] = useState({
        name:"IPHONE 6s",
        image:"https://th.bing.com/th/id/OIP.GkmQOcawdbFm0IEmgBglawHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        price:50000,
        quantity:1
    })
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/home" className="navbar-brand">OLA BUYER</a>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md=6">
                        <div className="card">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>NAME</th>
                                        <th>IMAGE</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL_PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.name}</td>
                                        <td><img src={product.image} width="100px"/></td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button className="bg-dark text-white" onClick={()=>{
                                               setProduct({...product,quantity:product.quantity-1}) 
                                            }}>-</button>
                                            {product.quantity}
                                            <button className="bg-dark text-white" onClick={()=>{
                                                setProduct({...product,quantity:product.quantity+1})
                                            }}>+</button>
                                            </td>
                                       <td>{product.quantity*product.price}</td>
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
export default Product