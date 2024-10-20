import React, { ReactNode } from 'react'
import Header from '../header'
import Footer from '../footer'

// Wrapper component
interface WrapperProps {
  children: ReactNode
  className?: string
  closed?: boolean
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [closed, setClosed] = React.useState(false)

  return (
    <div id="wrapper" className={closed ? 'close' : ''}>
      <Header
        onClose={() => {
          setClosed(!closed)
        }}
      ></Header>
      {children}
      <Footer />
    </div>
  )
}
export default Wrapper
