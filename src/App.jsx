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
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<PrivateRoute><Homepage /></PrivateRoute>} />
      <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/Orders" element={<PrivateRoute><Order /></PrivateRoute>} />
      <Route path="/Payouts & Account" element={<PrivateRoute><Payments /></PrivateRoute>} />
      <Route path="/Services" element={<PrivateRoute><Service /></PrivateRoute>} />
      <Route path="/Items" element={<PrivateRoute><Inventory /></PrivateRoute>} />
      <Route path="/planing" element={<PrivateRoute><Plan /></PrivateRoute>} />
      <Route path="/Help Center" element={<PrivateRoute><SearchBar /></PrivateRoute>} />
      <Route path="/Reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
      <Route path="/Open Cases" element={<PrivateRoute><OpenCases /></PrivateRoute>} />
    </Routes>
    <></>

    </>
  )
}

export default App
