import React from 'react'

function mainLayout() {
  return (
    <div>
      <h1>main</h1>
      <button onClick={()=> location.href='/login'}>Go to Dashboard</button>
    </div>
  )
}

export default mainLayout
