import { useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import useAuth from 'hooks/useAuth'
import { loginUser } from 'actions/auth.action'
import ILogin from 'models/Auth/ILogin'

export interface LoginProps {}

export const useLogin = (props: LoginProps) => {
  const dispatch = useAppDispatch()
  const [credentials, setCredentials] = useState<ILogin>({
    Email: '',
    Password: '',
  })
  const { isAuthenticated } = useAuth()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(loginUser(credentials))
    } catch (error) {
      alert(error)
    }
  }

  return {
    ...props,
    credentials,
    isAuthenticated,
    handleChange,
    handleSubmit,
  }
}
