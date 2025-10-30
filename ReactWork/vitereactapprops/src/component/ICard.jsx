// import React from 'react'

// function ICard(props) {
//   return (
//     <div>
//       <h2>name:{props.name}</h2>
//       <h2>Age:{props.age}</h2>
//       <h2>Branch:{props.branch}</h2>
//       <h2>College:{props.college}</h2>
//       <h2>Location:{props.location}</h2>
//     </div>
//   )
// }

// export default ICard

import React from 'react'

function Book(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h2>Title:{props.title}</h2>
      <h2>Publisher:{props.publisher}</h2>
      <h2>Price:{props.price}</h2>
      <button type='submit'>Add To Cart</button>
    </div>
  )
}

export default Book