import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Col from '@/components/atoms/col'

interface CardProps {
  children: ReactNode
  size?: number
  className?: string
  type?: 'tile' | 'box'
}

const CardContainer = styled.div`
  width: 100%;
  background: #fefefe;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  padding: 30px;
`

const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Card: React.FC<CardProps> = ({
  children,
  size = 12,
  className = '',
  type = 'box',
}) => {
  return (
    <Col size={size} className={className}>
      <CardContainer>
        {type === 'tile' && <Tile>{children}</Tile>}
        {type === 'box' && <div>{children}</div>}
      </CardContainer>
    </Col>
  )
}
export default Card
