import React, { useState } from 'react'
import './App.css'
import Router from 'router/Router'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <div className='App'>
      <Router
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default App
