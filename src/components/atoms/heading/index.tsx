import React from 'react'
import styled from 'styled-components'

type HeadingSize = 'heading1' | 'heading2' | 'heading3'

interface StyledHeadingProps {
  size: HeadingSize
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  font-weight: bold;
  color: #2a2a49;

  /* Dynamic font-size based on size prop */
  font-size: ${(props) => {
    switch (props.size) {
      case 'heading1':
        return '2rem'
      case 'heading2':
        return '1.75rem'
      case 'heading3':
        return '1.6rem'
      default:
        return '1rem' // Default font size if size is unknown
    }
  }};

  /* Margin bottom for heading2 */
  margin-bottom: ${(props) => (props.size === 'heading2' ? '20px' : '0')};

  /* Responsive font-size adjustment for mobile */
  @media screen and (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case 'heading1':
          return '1.6rem'
        case 'heading2':
          return '1.6rem'
        case 'heading3':
          return '1.4rem' // Optionally adjust for heading3 as well
        default:
          return '1rem'
      }
    }};
    margin-bottom: ${(props) => (props.size === 'heading2' ? '15px' : '0')};
  }
`

// Usage example
interface HeadingProps {
  size: HeadingSize
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ size, children }) => {
  return <StyledHeading size={size}>{children}</StyledHeading>
}

export default Heading
