import { useState } from 'react'

interface AuthState {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const useAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const login = (): void => {
    setIsAuthenticated(true)
  }

  const logout = (): void => {
    setIsAuthenticated(false)
  }

  return {
    isAuthenticated,
    login,
    logout,
  }
}

export default useAuth
