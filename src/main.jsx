import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Inicio from './conponents/Inicio.jsx'
import Login from './conponents/Login.jsx'
import './styles/variables.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/editor' element={<App/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes> 
    </BrowserRouter>
   
  </StrictMode>,
)
