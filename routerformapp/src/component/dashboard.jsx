import React, { use } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react';
import { useState } from 'react';


function dashboard() {
  const[data,setData] = useState([]);
  const[cart,setCart] = useState([]);

  useEffect(() => {
    function fetchData(){
      async function getData(){
        const serverResponse = await fetch('https://fakestoreapi.com/products');
        const data = await serverResponse.json();
        setData(data);
        console.log(data);
      }
      getData();
    }
    fetchData();
  }, [])

  function addToCart(item){
    setCart(data=>[...data,item]);
    cart.length===0? alert("cart is empty") : (
        <div>
          {
            data.map((item)=>(
                price+=item.price
            ))
      }
    </div>)
    // alert(cart.length);
  }
  return (
    // <div>
    //   {
    //     JSON.stringify(data)
    //   }
    //   <h1>dashbaord</h1>
    // </div>
    
    
    // <div>
    //   {
    //   data.length===0? (<h2>Loading...</h2>) : (<h2>Data Loaded</h2>)
    //   }
    // </div>
    
    <div>
      {
      data.length===0? (<h2>Loading...</h2>) : (
        <h2>
          {
            data.map((item)=>(
              <div style={{height: 'auto',width: '800px', backgroundColor: 'yellow', color: 'red', margin: '20px', padding: '10px', border: '2px solid black'}}>
                <img src= {item.image} height={100} width={100}></img>
                <h2>{item.title}</h2>
                <h3>'$' {item.price}</h3> 
                <h4>{item.category}</h4>
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            ))
      }
    </h2>)
    }
    </div>
  )
}

export default dashboard
