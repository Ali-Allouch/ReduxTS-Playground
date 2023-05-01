import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRouter, RoutesProps } from './useRouter'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import Layout from 'components/Layout/Layout'
import Home from 'screens/Home/Home'
import Login from 'screens/Auth/Login/Login'
import SignUp from 'screens/Auth/SignUp/SignUp'
import Products from 'screens/Products/Products'
import Profile from 'screens/Profile/Profile'
import NotFound from 'screens/NotFound/NotFound'

const Router: React.FC<RoutesProps> = (props: RoutesProps) => {
  const { isAuthenticated, setIsAuthenticated } = useRouter(props)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route
            path='/Login'
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Products' element={<Products />} />

          {/* Private Routes */}
          <Route
            path='/Profile/*'
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                element={<Profile />}
              />
            }
          />

          {/* Not Found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
