import React from 'react'
import { useSignUp, SignUpProps } from './useSignUp'
import { Navigate } from 'react-router-dom'

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  const { isAuthenticated, handleSubmit } = useSignUp(props)

  return !isAuthenticated ? (
    <main>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Sign Up</h1>
          </div>
        </div>
        <form role='form' onSubmit={handleSubmit}>
          <div className='row flex-column align-items-center'>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 mb-2'>
              <div className='form-group'>
                <label htmlFor='Name' className='form-label fw-bold'>
                  Name
                </label>
                <input
                  type='text'
                  id='Name'
                  className='form-control'
                  required
                />
              </div>
            </div>
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
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 mb-2'>
              <label
                htmlFor='PasswordConfirmation'
                className='form-label fw-bold'
              >
                Password Confirmation
              </label>
              <input
                type='password'
                id='PasswordConfirmation'
                className='form-control'
                required
              />
            </div>
            <div className='col-12 text-center'>
              <button className='btn btn-primary'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to='/Profile' replace />
  )
}

export default SignUp
