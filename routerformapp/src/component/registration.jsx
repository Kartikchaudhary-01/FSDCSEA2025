

function Registration() {
  return (
    <div>
      <h2>Registration</h2>
      
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button onClick={()=> location.href= '/dashboard'}>Register</button>
    </div>

  )
}

export default Registration;
