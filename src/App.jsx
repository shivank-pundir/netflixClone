import { useEffect, useState } from 'react'
import "./app.css"
import Home from './components/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import Player from './components/pages/Player/Player'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/player/:id' element={<Player />}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
