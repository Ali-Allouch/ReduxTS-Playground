import { combineReducers } from 'redux'
import authReducer, { AuthState } from './auth.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = {
  auth: AuthState
}

export default rootReducer
