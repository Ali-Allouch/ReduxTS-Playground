import React from 'react'
import { useSignUp, SignUpProps } from './useSignUp'

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  const {} = useSignUp(props)

  return (
    <main>
      <h1>Sign Up</h1>
    </main>
  )
}

export default SignUp
