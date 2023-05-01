import { SetStateAction } from 'react'

export interface RoutesProps {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>
}

export const useRouter = (props: RoutesProps) => {
  return {
    ...props,
  }
}
