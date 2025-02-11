import React, { ReactNode } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout

