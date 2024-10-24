import React, { useState } from 'react'
import styled, { css } from 'styled-components'

interface CustomInputProps {
  icon?: React.ReactNode // To pass an icon component
  placeholder?: string
  hoverColor?: string // Custom hover color
  value: string
  onChange: (_value: string) => void
  type?: string // Optional for input type, default is text
  className?: string // Additional classes for styling
  required?: boolean // Required field validation
  minLength?: number // Minimum length for validation (e.g., for password)
  validate?: (_value: string) => string | null // Custom validation function
}

// Styled Components
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
`

const StyledInput = styled.input<{ hoverColor: string; hasError: boolean }>`
  width: 100%;
  padding: 15px 10px;
  padding-left: 40px; /* Space for the icon */
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 16px;
  color: #374151;
  outline: none;
  transition: all 0.2s ease;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #f87171;
    `}

  &:hover {
    border-color: ${(props) => props.hoverColor || '#3b82f6'};
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`

const ErrorMessage = styled.p`
  color: #f87171;
  font-size: 14px;
  margin-top: 4px;
`

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder = 'Enter text...',
  hoverColor = '#3b82f6', // Default hover color (blue)
  value,
  onChange,
  type = 'text',
  className = '',
  required = false,
  minLength,
  validate,
  ...props
}) => {
  const [error, setError] = useState<string | null>(null)

  const handleValidation = (inputValue: string) => {
    let validationError = null

    if (required && !inputValue) {
      validationError = 'This field is required'
    }

    if (type === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailPattern.test(inputValue)) {
        validationError = 'Invalid email format'
      }
    }

    if (minLength && inputValue.length < minLength) {
      validationError = `Minimum length is ${minLength} characters`
    }

    if (validate) {
      const customError = validate(inputValue)
      if (customError) {
        validationError = customError
      }
    }

    setError(validationError)
    return validationError === null // Return true if no error
  }

  const handleChange = (inputValue: string) => {
    onChange(inputValue)
    handleValidation(inputValue)
  }

  return (
    <InputWrapper className={className}>
      <div style={{ position: 'relative' }}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          hoverColor={hoverColor}
          hasError={!!error}
          {...props}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
}

export default CustomInput
