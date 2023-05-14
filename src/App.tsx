import React from 'react'
import './App.scss'
import Router from 'router/Router'
import useAuth from 'hooks/useAuth'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div className='App'>
      <Router isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default App
