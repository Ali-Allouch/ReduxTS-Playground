import { SetStateAction } from "react"

export interface LoginProps {
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>
}

export const useLogin = (props: LoginProps) => {
  return {
    ...props,
  }
}
