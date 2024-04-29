import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import NotFound from './pages/404'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import Dashboard from './pages/Dashboard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/*" element={<NotFound/>}/> 
        {/* For the convention and code quality we write 404 page in the last rather putting it in top of other  paths  */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
