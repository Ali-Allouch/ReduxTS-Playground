export interface HeaderProps {}
import useAuth from 'hooks/useAuth'

export const useHeader = (props: HeaderProps) => {
  const { isAuthenticated } = useAuth()

  return {
    ...props,
    isAuthenticated,
  }
}
