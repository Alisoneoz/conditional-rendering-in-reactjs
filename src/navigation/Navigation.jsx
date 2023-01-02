import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import TheOtherPage from '../pages/TheOtherPage'
import NavBar from './Navbar'

const Navigation = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/theotherpage" element={<TheOtherPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation