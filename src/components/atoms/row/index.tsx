import React, { ReactNode } from 'react'
import styled from 'styled-components'
// Styled components
const StyledRow = styled.div<{ className?: string; id?: string }>`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  padding: 0 0 10px 20px;
  position: relative;

  & > div[class*='col-'] {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    padding: 0 20px 20px 0;
  }

  & .col_in {
    width: 100%;
    background: #fefefe;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 1;
    padding: 30px;

    & + .heading {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  & .col-3 {
    width: 25%;
  }
  & .col-4 {
    width: 33.3%;
  }
  & .col-6 {
    width: 50%;
  }
  & .col-8 {
    width: 66.6%;
  }
  & .col-9 {
    width: 75%;
  }
  & .col-12 {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 0 0 5px 15px;

    & > div[class*='col-'] {
      padding: 0 15px 15px 0;
    }

    & .col-3 {
      width: 50%;
    }

    & .col-9,
    & .col-9 + .col-3,
    & .col-3:nth-of-type(1):nth-last-of-type(2),
    & .col-6 {
      width: 100%;
    }

    & .col-6:nth-of-type(2):nth-last-of-type(2) {
      order: 1;
    }

    & .col-6 + .col-3:nth-last-of-type(1) {
      order: 3;
    }

    & .col-3:nth-of-type(1):nth-last-of-type(3) {
      order: 2;
    }

    & .col_in {
      padding: 25px 15px;
    }
  }

  @media screen and (max-width: 600px) {
    & .col-4,
    & .col-8 {
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 0 0 5px 10px;

    & > div[class*='col-'] {
      padding: 0 10px 10px 0;
    }
  }
`

// Row component
interface RowProps {
  children: ReactNode
  className?: string
  id?: string
}

const Row: React.FC<RowProps> = ({ children, className = '', id }) => {
  return (
    <StyledRow className={className} id={id}>
      {children}
    </StyledRow>
  )
}

export default Row
