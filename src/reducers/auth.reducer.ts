import { createSlice } from '@reduxjs/toolkit'

const storedUserId = localStorage.getItem('UserId')
const storedEmail = localStorage.getItem('Email')
const storedIsLoggedIn = localStorage.getItem('IsLoggedIn')

export interface AuthState {
  Id: number | null
  Email: string
  IsLoggedIn: string | null
}

const initialState: AuthState = {
  Id: storedUserId ? Number(storedUserId) : null,
  Email: storedEmail || '',
  IsLoggedIn: storedIsLoggedIn || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.Id = action.payload.Id
      state.Email = action.payload.Email
      state.IsLoggedIn = 'true'

      localStorage.setItem('UserId', action.payload.Id)
      localStorage.setItem('Email', action.payload.Email)
      localStorage.setItem('IsLoggedIn', 'true')
    },
    logout(state) {
      state.Id = null
      state.Email = ''
      state.IsLoggedIn = 'false'

      localStorage.removeItem('UserId')
      localStorage.removeItem('Email')
      localStorage.removeItem('IsLoggedIn')
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
