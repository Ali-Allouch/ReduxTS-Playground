import { loginSuccess, logout } from 'reducers/auth.reducer'
import { authService } from 'services/auth.service'
import { Dispatch } from 'redux'
import ILogin from 'models/Auth/ILogin'
import IUser from 'models/Auth/IUser'

export const loginUser =
  (credentials: ILogin) => async (dispatch: Dispatch) => {
    try {
      const response = await authService.login(credentials)
      if (response.success) {
        const { Id, Email } = response.data
        dispatch(loginSuccess({ Id, Email }))
      }
    } catch (error) {
      // Handle login error
    }
  }

export const signupUser =
  (credentials: IUser) => async (dispatch: Dispatch) => {
    try {
      const response = await authService.signup(credentials)
      if (response.success) {
        const { Id, Email } = response.data
        dispatch(loginSuccess({ Id, Email }))
      }
    } catch (error) {
      // Handle signup error
    }
  }

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(logout())
}
