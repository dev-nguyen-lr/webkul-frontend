import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  id?: string
  label?: string
  primary?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const PrimaryButton = styled.input`
  background: #007ebe;
  color: #fff;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.15);
  text-align: center;
  line-height: 1.5;
  padding: 7px 15px;
  min-width: 140px;
  display: inline-block;
  border-radius: 3px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 1.35rem;
  cursor: pointer;
  border: none;
  &:hover {
    background: #005784;
  }
`

const SecondaryButton = styled.input`
  background: #fff;
  color: #333;
  border: 1px solid #333;
  padding: 6px 14px;
  text-align: center;
  line-height: 1.5;
  min-width: 140px;
  display: inline-block;
  border-radius: 3px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 1.35rem;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: #333;
    color: #fff;
  }
`

const Button: React.FC<ButtonProps> = ({
  id,
  label,
  onClick,
  primary = true,
}) => {
  return primary ? (
    <PrimaryButton id={id} value={label} type="button" onClick={onClick} />
  ) : (
    <SecondaryButton id={id} value={label} type="button" onClick={onClick} />
  )
}

export default Button
