import React from 'react'
import styled from 'styled-components'

type HeadingSize = 'heading1' | 'heading2' | 'heading3'

interface StyledHeadingProps {
  size: HeadingSize
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
const DetailedLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  margin-bottom: 0.1em;
  margin-left: 10px;
  span {
    font-size: 1.9rem;
  }
`
interface HeadingProps {
  size: HeadingSize
  children: React.ReactNode
  link?: string
}

const DataTableHeading: React.FC<HeadingProps> = ({
  size,
  children,
  link = '#',
}) => {
  return (
    <StyledHeading size={size}>
      {children}{' '}
      <DetailedLink href={link} title="もっと見る">
        <span className="material-symbols-outlined">apps</span>
      </DetailedLink>
    </StyledHeading>
  )
}

export default DataTableHeading
