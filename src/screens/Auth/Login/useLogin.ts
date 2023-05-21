import { useAppDispatch } from 'hooks/useAppDispatch'
import useAuth from 'hooks/useAuth'
import { loginUser } from 'actions/auth.action'
import ILogin from 'models/Auth/ILogin'

export interface LoginProps {}

export const useLogin = (props: LoginProps) => {
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const credentials: ILogin = {
      Email: (event.target as HTMLFormElement).Email.value,
      Password: (event.target as HTMLFormElement).Password.value,
    }
    try {
      dispatch(loginUser(credentials))
    } catch (error) {
      alert(error)
    }
  }

  return {
    ...props,
    isAuthenticated,
    handleSubmit,
  }
}
