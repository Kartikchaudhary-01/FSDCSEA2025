import React from 'react'
import Profile from './Profile'
import './Gallery.css'
function Gallery() {
  return (
    <div className='gallery'>
        <h2>profile image</h2>
        <Profile />
        <Profile />
        <Profile />
    </div>
  )
}

export default Gallery