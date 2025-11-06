import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Login() {
  return (
    <div>
      <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
      <button onClick={()=> location.href='/register'}>submit</button>
    </div>
  )
}

export default Login;
