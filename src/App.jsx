import React from 'react'
// import Useeffect from './Useeffect'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Login from './Login'
const App = () => {

  
  return (
    <div>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
    </div>
  )
}

export default App