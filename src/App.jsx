import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home'
import Inventory from './pages/Inventory'
import Order from './pages/Orders'
import Payments from './pages/Payments'
import Plan from './pages/Plan'
import Sustainability from './pages/Sustainability'
import News from './pages/News'
import Dashboard from './pages/Dashboard'
import Service from './pages/Services'
import SearchBar from './pages/Help'
import Reports from './components/Reports'
import OpenCases from './components/Cases'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Orders" element={<Order />} />
      <Route path="/Payouts & Account" element={<Payments />} />
      <Route path="/Services" element={<Service />} />
      <Route path="/Items" element={<Inventory />} />
      <Route path="/planing" element={<Plan />} />
      <Route path="/Help Center" element={<SearchBar />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Open Cases" element={<OpenCases />} />
    </Routes>
    <></>

    </>
  )
}

export default App
