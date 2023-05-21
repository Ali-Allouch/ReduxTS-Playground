import { useAppDispatch } from 'hooks/useAppDispatch'
import useAuth from 'hooks/useAuth'
import { signupUser } from 'actions/auth.action'
import IUser from 'models/Auth/IUser'

export interface SignUpProps {}

export const useSignUp = (props: SignUpProps) => {
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const Password = (event.target as HTMLFormElement).Password.value
    const PasswordConfirmation = (event.target as HTMLFormElement)
      .PasswordConfirmation.value

    if (Password !== PasswordConfirmation) {
      alert('Password and Password Confirmation are not identical')
      return
    }

    const credentials: IUser = {
      Name: (event.target as HTMLFormElement).Name.value,
      Email: (event.target as HTMLFormElement).Email.value,
      Password: Password,
    }
    try {
      dispatch(signupUser(credentials))
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
