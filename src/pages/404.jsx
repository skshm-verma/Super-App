import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const NotFound = () => {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate("/dashboard")
  }
  return (
    <div className='errorPage'>
      <div className='errorContainer'>
        <h1 style={{ fontSize: '12vw', lineHeight: '1em' }}>404</h1>
        <h4 style={{ fontSize: '2em', marginBottom: '20px', textTransform: 'uppercase' }}>OOPS!! Page Not Found</h4>
        <p style={{ fontSize: '1.2em' }}>Sorry the page your are looking for doesn't exist</p>
        <button className='errorButtonStyles' onClick={handleSignUp}>Return Home</button>
      </div>
    </div>
  )
}

export default NotFound
