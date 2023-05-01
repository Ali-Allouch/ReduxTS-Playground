import React from 'react'
import { useFooter, FooterProps } from './useFooter'

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const {} = useFooter(props)

  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
