import React, { Fragment } from 'react'
import { useLayout, LayoutProps } from './useLayout'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = useLayout(props)

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
