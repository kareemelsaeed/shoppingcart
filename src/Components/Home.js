import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = (props)=>{
    const navigate = useNavigate()
    return(
        <div>

            <div>
                <h1 className="text-center text-info mt-3">Shopping Cart</h1>
                <Button variant="danger ms-5 mt-2" onClick={props.reset}>Reset</Button>
            </div>

            {props.products.map((e)=>(
                <div key={e.id} className="d-flex justify-content-around mt-4 text-center">
                    <h1 style={{width:"6rem"}}>{e.name}</h1>
                    <h1 style={{width:"6rem"}}>{e.count}</h1>
                    <Button variant="success" style={{width:"6rem"}} onClick={()=>props.add(e)}>+</Button>
                    <Button variant="warning" style={{width:"6rem"}} onClick={()=>props.mines(e)}>-</Button>
                    <Button variant="danger" style={{width:"6rem"}} onClick={()=>props.del(e)}>del</Button>
                    <Button variant="info" style={{width:"6rem"}} onClick={()=> navigate("/Detals" , {state : {myProducts:{e}}})}>Details</Button>
                </div>
            ))}
        </div>
    )
}

export default Home;