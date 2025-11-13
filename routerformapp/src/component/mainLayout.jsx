import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function mainLayout() {
  return (
    <div>
      <h1>main</h1>
      <nav>
        <Link style={{fontSize : '30px', color: 'red' }} to='/login'>Login</Link>
        <Link style={{fontSize : '30px', color: 'red' , marginLeft : '25px'}} to='/register'>Registration</Link>
      </nav>
    </div>
  )
}

export default mainLayout
