import React, { ReactNode } from 'react'
import styled from 'styled-components'
// Styled components
const StyledIcon = styled.div<{
  width: string
  height: string
  radius: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.radius};
  background: #f3ecfe;
`

// Row component
interface IconProps {
  children: ReactNode
  width?: string
  height?: string
  radius?: string
}

const Icon: React.FC<IconProps> = ({
  children,
  width = '60px',
  height = '60px',
  radius = '100px',
}) => {
  return (
    <StyledIcon width={width} height={height} radius={radius}>
      {children}
    </StyledIcon>
  )
}

export default Icon
