import { useSelector } from 'react-redux'
import { RootState } from 'reducers/rootReducer'
import { AuthState } from 'reducers/auth.reducer'

const useAuth = () => {
  const authState = useSelector((state: RootState) => state.auth) as AuthState
  const isAuthenticated =
    authState.IsLoggedIn === 'true' ||
    localStorage.getItem('IsLoggedIn') === 'true'

  return {
    isAuthenticated,
  }
}

export default useAuth
