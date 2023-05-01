import React from 'react'
import { useHeader, HeaderProps } from './useHeader'

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {} = useHeader(props)

  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default Header
