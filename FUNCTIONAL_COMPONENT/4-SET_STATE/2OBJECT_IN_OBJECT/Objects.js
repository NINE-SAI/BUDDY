import React,{useState} from "react"
let Objects = ()=>{
    let [product,setProduct] = useState({
        mobile:{
            name:"IPHONE 6s",
            image:"https://th.bing.com/th/id/OIP.GkmQOcawdbFm0IEmgBglawHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            price:50000,
            quantity:1
        }
    })
    let decHandler = ()=>{
        setProduct({mobile:{...product.mobile,quantity:product.mobile.quantity-1}})
    }
    let incHandler = ()=>{
        setProduct({mobile:{...product.mobile,quantity:product.mobile.quantity+1}})
    }
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">OLA BUYERS</a>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>NAME</th>
                                    <th>IAMGE</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL_PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.mobile.name}</td>
                                    <td><img src={product.mobile.image} width="120px" alt="image"/></td>
                                    <td>{product.mobile.price}</td>
                                    <td>
                                        <i className="fa fa-minus-circle" onClick={decHandler}></i>
                                        {product.mobile.quantity}
                                        <i className="fa fa-plus-circle" onClick={incHandler}></i>
                                    </td>
                                    <td>{product.mobile.price*product.mobile.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Objects