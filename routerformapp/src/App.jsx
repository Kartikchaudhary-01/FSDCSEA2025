import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/login.jsx'
import Registration from './component/registration.jsx'
import MainLayout from './component/mainLayout.jsx'
import DashBoard from './component/dashboard.jsx'


function App() {
  const[logData,setLogData]= useState();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login loginData={logData}/>}/>
        <Route path="/register" element={<Registration regData={setLogData}/>}/>
        <Route path="/" element={<MainLayout />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
    <h2>{JSON.stringify(logData)}</h2>
    </>
  )
}

export default App
