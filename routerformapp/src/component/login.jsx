import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function Login({loginData}) {
  const[username,setUsername]=React.useState();
  const[password,setPass]=React.useState();
  const navigate = useNavigate();

  function verification(e){
    e.preventDefault();
    // alert("username is "+username+" password is "+password);
    // const info = {
    //   username: username,
    //   password: password
    // }

    if(loginData.username === username){
      if(loginData.password === password){
        navigate('/dashboard');
      }
      else{
        alert("invalid password");
      }
    }
    else{
      alert("email is not registered");
    }
  }
  return (
    <div>
      <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" onChange={(e)=>setPass(e.target.value)} id="password" name="password" />
        </div>
      {/* <button onClick={()=> location.href='/register'}>submit</button> */}
      <button onClick={verification}>submit</button>
    </div>
  )
}

export default Login;
