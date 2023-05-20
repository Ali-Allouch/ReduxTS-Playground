import useAuth from 'hooks/useAuth'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { logoutUser } from 'actions/auth.action'

export interface HeaderProps {}

export const useHeader = (props: HeaderProps) => {
  const { isAuthenticated } = useAuth()
  const dispatch = useAppDispatch()

  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(logoutUser())
  }

  return {
    ...props,
    isAuthenticated,
    handleLogout,
  }
}
