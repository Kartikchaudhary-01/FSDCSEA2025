import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import Book from './component/ICard'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'
function App() {
  return (
    <>
     <h2>ABES Engineering College</h2>
     {/* <Gallery/> */}
     {/* <div> */}
      {/* <style> */}
        {/* display: flex; */}
      {/* justify-content: center; */}
      {/* align-items: center; */}
      {/* height: 100vh;   */}
      {/* padding: 20px; */}
      {/* </style> */}
     {/* <Book className='bookstore' title="Book 1" author="Author 1" price="10" image="image1.jpg" /> */}
     {/* <Book className='bookstore' title="Book 2" author="Author 2" price="15" image="image2.jpg" /> */}
      {/* <Book className='bookstore' title="Book 3" author="Author 3" price="20" image="image3.jpg" />  */}
     {/* <Book className='bookstore' title="Book 4" author="Author 4" price="25" image="image4.jpg" /> */}
     {/* </div> */}
      {/* <StateHandling /> */}
      <ImageManipulation />
    </>
  )
}

export default App