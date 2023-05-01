import React from 'react'
import { useSignUp, SignUpProps } from './useSignUp'

const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  const {} = useSignUp(props)

  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  )
}

export default SignUp
