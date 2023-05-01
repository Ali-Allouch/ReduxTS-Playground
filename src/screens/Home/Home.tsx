import React from 'react'
import { useHome, HomeProps } from './useHome'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {} = useHome(props)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
