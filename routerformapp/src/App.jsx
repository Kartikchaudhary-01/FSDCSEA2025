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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/" element={<MainLayout />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
