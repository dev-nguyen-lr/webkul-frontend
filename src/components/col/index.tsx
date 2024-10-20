import React, { ReactNode } from 'react'

interface ColProps {
  children: ReactNode
  size?: number
  className?: string
}

const Col: React.FC<ColProps> = ({ children, size = 12, className = '' }) => {
  return <div className={`col-${size} ${className}`}>{children}</div>
}
export default Col
