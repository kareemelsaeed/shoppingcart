import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Detals = (props) =>{
    const location = useLocation()
    let obj = location.state.myProducts
    // console.log(obj);
    let x = Object.values(obj)
    // console.log(x[0].name);

    return(
        <div className="d-flex align-items-center justify-content-center text-center" style={{height:"90vh"}}>

            <div>
                <div className="text-info"> 
                    <h1>Product Name : <span className="text-danger">{x[0].name}</span></h1>
                    <h2>Avaliable with <span className="text-danger">{x[0].count}</span> Products</h2>
                    <h3>Price : <span className="text-danger">{x[0].price}</span> EGP</h3>
                    <h4 className="mt-4 bg-secondary p-2 border rounded-pill">Total Price : <span className="text-danger">{x[0].price * x[0].count}</span> EGP</h4>
                </div>

                <div className="d-flex align-items-end justify-content-center" style={{height: '8rem'}}>
                    <Button variant="warning"><Link to="/Home" className="fw-bold text-decoration-none text-danger">Back to Shopping-Cart</Link></Button>
                </div>
            </div>

        </div>
    )
}

export default Detals;