import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Landing } from './components/Landing'
import { Start } from './components/Start'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
