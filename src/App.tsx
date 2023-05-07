import React from 'react'
import './App.scss'
import Router from 'router/Router'
import useAuth from 'hooks/useAuth'

function App() {
  const { isAuthenticated, login } = useAuth()

  return (
    <div className='App'>
      <Router isAuthenticated={isAuthenticated} login={login} />
    </div>
  )
}

export default App
