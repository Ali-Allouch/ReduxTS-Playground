export interface LoginProps {
  login: () => void
}

export const useLogin = (props: LoginProps) => {
  return {
    ...props,
  }
}
