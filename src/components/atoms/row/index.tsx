import React, { ReactNode } from 'react'

// Row component
interface RowProps {
  children: ReactNode
  className?: string
  id?: string
}

const Row: React.FC<RowProps> = ({ children, className = '', id }) => {
  return (
    <div className={`row ${className}`} id={id}>
      {children}
    </div>
  )
}
export default Row
