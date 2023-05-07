import React from 'react'
import { useFooter, FooterProps } from './useFooter'

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const {} = useFooter(props)

  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer
