import React from 'react'
import { useHeader, HeaderProps } from './useHeader'
import { NavLink } from 'react-router-dom'

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isAuthenticated } = useHeader(props)

  return (
    <header>
      <nav className='navbar navbar-expand-lg fixed-top bg-light'>
        <div className='container'>
          <NavLink to='./' className='navbar-brand'>
            ReduxTS Playground
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='./' className='nav-link' end>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='Products' className='nav-link' end>
                  Products
                </NavLink>
              </li>
              <li className={`nav-item ${!isAuthenticated && 'd-none'}`}>
                <NavLink to='Profile' className='nav-link' end>
                  Profile
                </NavLink>
              </li>
              <li className={`nav-item ${isAuthenticated && 'd-none'}`}>
                <NavLink to='Login' className='nav-link' end>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
