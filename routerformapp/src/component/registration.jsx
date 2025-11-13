import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Registration({regData}) {
  const[name,setName]= useState();
  const[email,setEmail]=useState();
  const[password,setPass]=useState();

  function getData(e){
    e.preventDefault();
    // alert("name is "+name+" email is "+email+" password is "+password);
    const msg = {
      username: name,
      email: email,
      password: password
    }
    regData(msg);
  
  }
  return (
    <>
    <div>
      <form>
      <h2>Registration</h2>
      
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} id="username" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={(e)=>setPass(e.target.value)} id="password" name="password" />
      </div>
      <button onClick={getData}>Register</button>
    </form>
    </div>
    
    <Link style={{fontSize : '30px', color: 'red' }} to='/login'>Login</Link>
    </>
    
  )
}

export default Registration;
