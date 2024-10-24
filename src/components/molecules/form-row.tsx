import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Col from '@/components/atoms/col'

interface FormRowProps {
  children: ReactNode
  colsize?: number
  size?: number
  className?: string
  title?: string
  helperText?: string
  isFirstRow?: boolean
}
const FormRowContainer = styled.div<{ isFirstRow: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #ddd;
  border-top: ${(props) => (props.isFirstRow ? '1px solid #ddd' : 'none')};

  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }
`

const StyledHelperText = styled.span`
  margin: 0 0 0 8px;
  background: #fd6768;
  border-radius: 3px;
  padding: 2px 4px;
  color: #ffffff;
  font-size: 70%;
  text-align: center;
  line-height: 1;
`
const FormHeaderContainer = styled.div`
  display: block;
  padding: 15px 5px;
  width: 220px;
  font-weight: bold;
`
const FormContentContainer = styled.div`
  width: calc(100% - 220px);
  display: block;
  padding: 15px 5px;
`
const FormRow: React.FC<FormRowProps> = ({
  children,
  colsize = 12,
  className = '',
  title,
  helperText,
  isFirstRow = false,
}) => {
  return (
    <Col size={colsize} className={className}>
      <FormRowContainer isFirstRow={isFirstRow}>
        <FormHeaderContainer>
          {title && (
            <div>
              {title}
              {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
            </div>
          )}
        </FormHeaderContainer>
        <FormContentContainer>{children}</FormContentContainer>
      </FormRowContainer>
    </Col>
  )
}
export default FormRow
