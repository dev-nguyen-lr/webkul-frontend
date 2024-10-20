import React, { ReactNode } from 'react'
import Col from '@/components/atoms/col'

interface CardProps {
  children: ReactNode
  size?: number
  className?: string
}

const Card: React.FC<CardProps> = ({ children, size = 12, className = '' }) => {
  return (
    <Col size={size} className={className}>
      <div className="col_in">
        <div className="content">{children}</div>
      </div>
    </Col>
  )
}
export default Card
