import React, { ReactNode } from 'react'
import styled from 'styled-components'
// Styled components
const StyledBadge = styled.div<{ bgColor: string }>`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  font-size: 1.1rem;
  border-radius: 100px;
  text-align: center;
  padding: 0 5px;
  background-color: ${(props) => props.bgColor};
`

interface BadgeProps {
  children: ReactNode
  id?: string
  bgColor?: string
}

const Badge: React.FC<BadgeProps> = ({ children, bgColor = '#007ebe' }) => {
  return <StyledBadge bgColor={bgColor}>{children}</StyledBadge>
}

export default Badge
