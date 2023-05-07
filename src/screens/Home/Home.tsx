import React from 'react'
import { useHome, HomeProps } from './useHome'
import './Home.scss'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {} = useHome(props)

  return (
    <div className='main'>
      <h1>Home</h1>
    </div>
  )
}

export default Home
