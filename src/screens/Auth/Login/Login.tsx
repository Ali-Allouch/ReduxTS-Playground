import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin, LoginProps } from './useLogin'
import { Navigate } from 'react-router-dom'

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { isAuthenticated, handleSubmit } = useLogin(props)

  return !isAuthenticated ? (
    <main>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Login</h1>
          </div>
        </div>
        <form role='form' onSubmit={handleSubmit}>
          <div className='row flex-column align-items-center'>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 mb-2'>
              <div className='form-group'>
                <label htmlFor='Email' className='form-label fw-bold'>
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  className='form-control'
                  required
                />
              </div>
            </div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 mb-2'>
              <label htmlFor='Password' className='form-label fw-bold'>
                Password
              </label>
              <input
                type='password'
                id='Password'
                className='form-control'
                required
              />
            </div>
            <div className='col-12 text-center mb-2'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <div className='col-12 text-center'>
              Don&apos;t have an account?{' '}
              <Link to='/SignUp' className='text-decoration-none'>
                Signup here!
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to='/Profile' replace />
  )
}

export default Login
