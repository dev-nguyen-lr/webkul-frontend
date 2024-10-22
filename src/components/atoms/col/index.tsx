import React, { ReactNode } from 'react'

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: number
  className?: string
}

const Col: React.FC<ColProps> = ({
  children,
  size = 12,
  className = '',
  ...props
}) => {
  return (
    <div className={`col-${size} ${className}`} {...props}>
      {children}
    </div>
  )
}
export default Col
