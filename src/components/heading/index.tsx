import React, { ReactNode } from 'react'

// Heading component
interface HeadingProps {
  children: ReactNode
  className?: string
  id?: string
  size?: number
}

const Heading: React.FC<HeadingProps> = ({
  size,
  children,
  className = '',
  id,
}) => {
  return (
    <div className={`heading${size} ${className}`} id={id}>
      {children}
    </div>
  )
}
export default Heading
