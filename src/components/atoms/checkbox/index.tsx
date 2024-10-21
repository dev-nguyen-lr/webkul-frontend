import React from 'react'
import styled from 'styled-components'

interface CheckBoxProps {
  id?: string
  name?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  border: 3px solid #ddd;
  border-radius: 2px;
  cursor: pointer;
  appearance: none;
  background-color: white;
  display: inline-block;
  position: relative;

  &:checked {
    border: 3px solid #007ebe;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 38%;
    left: 50%;
    width: 6px;
    height: 10px;
    border-right: 3px solid #007ebe;
    border-bottom: 3px solid #007ebe;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const Label = styled.label`
  margin-left: 8px;
  color: #1f2937;
`

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <CheckBoxWrapper>
      <StyledInput
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Label htmlFor={id}>{label}</Label>
    </CheckBoxWrapper>
  )
}

export default CheckBox
