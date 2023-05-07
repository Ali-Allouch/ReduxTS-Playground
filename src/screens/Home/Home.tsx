import React from 'react'
import { useHome, HomeProps } from './useHome'
import styles from './Home.module.scss'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {} = useHome(props)

  return (
    <main className={styles.main}>
      <h1>Home</h1>
    </main>
  )
}

export default Home
