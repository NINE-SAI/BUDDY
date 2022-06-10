import React, {useState} from "react"
let Bootstrap = ()=>{
    let [product,setProduct] = useState({
        number:1
    })
    return(<div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-head">
                            <button className="bg-dark text-white" 
                                onClick={()=>{
                                    setProduct({...product, number:product.number-1})
                                             }}>-</button>
                            <h1>{product.number}</h1>
                            <button className="bg-dark text-white" 
                                onClick={()=>{
                                    setProduct({...product, number:product.number+1})
                                             }}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bootstrap