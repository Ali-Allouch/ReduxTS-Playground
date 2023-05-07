import React from 'react'
import { useLogin, LoginProps } from './useLogin'

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const {} = useLogin(props)

  return (
    <main>
      <h1>Login</h1>
    </main>
  )
}

export default Login
