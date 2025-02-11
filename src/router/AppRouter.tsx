import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Services from '../pages/Services/Services'
import About from '../pages/About/About'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/acerca-de" element={<About />} />
    </Routes>
  )
}

export default AppRouter

