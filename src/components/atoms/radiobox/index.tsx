import React from 'react'
import styled from 'styled-components'

interface RadioBoxProps {
  id?: string
  label: string
  checked?: boolean
  name?: string
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const RadioBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const StyledRadio = styled.input`
  width: 20px;
  height: 20px;
  border: 3px solid #ddd;
  border-radius: 100px;
  cursor: pointer;
  appearance: none;
  background-color: white;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:checked {
    border-color: #007ebe;
  }
  &:checked::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100px;
    background: #007ebe;
    border: none;
    transform: rotate(45deg);
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const Label = styled.label`
  display: inline-block;
  padding: 6px 15px 6px 5px;
  cursor: pointer;
`

const RadioBox: React.FC<RadioBoxProps> = ({
  id,
  label,
  checked,
  disabled = false,
  onChange,
  name,
}) => {
  return (
    <RadioBoxWrapper>
      <StyledRadio
        type="radio"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <Label htmlFor={id}>{label}</Label>
    </RadioBoxWrapper>
  )
}

export default RadioBox
