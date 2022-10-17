import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detals from "./Components/Detals";
import Home from "./Components/Home";
import Naav from "./Components/Naav";

const App = ()=>{
  const [products, setProducts] = useState([
    {id:0, name:"Chipsy", count:1, avaliable:10, price:100},
    {id:1, name:"Molto", count:2, avaliable:30, price:200},
    {id:2, name:"Chooclate", count:3, avaliable:25, price:300},
    {id:3, name:"Pepsi", count:5, avaliable:15, price:400},
  ])

  let add = (obj)=>{
    let product = products.map((e)=>{
      if (obj.id === e.id) {
        e.count++
      }
      return e;
    })
    setProducts(product)
  }

  let mines = (obj)=>{
    let product = products.map((e)=>{
      if (obj.id === e.id && e.count > 0) {
        e.count--
      }
      return e;
    })
    setProducts(product)
  }

  let del = (obj)=>{
    let product = products.filter((e)=> e.id !== obj.id)
    setProducts(product)
  }

  let count = ()=>{
    let product = products.filter((e)=> e.count > 0)
    console.log(product.length);
  }


 

  return (
    <div>
      
      <Naav  products={products}/>
        
      



      <Routes>
        <Route path="/" element={<Home products={products} add={add} mines={mines} del={del}/>} />
        <Route path="/Home" element={<Home products={products} add={add} mines={mines} del={del}/>} />
        <Route path="/Detals" element={<Detals products={products}/>} />
      </Routes>

    </div>
  )
}

export default App;