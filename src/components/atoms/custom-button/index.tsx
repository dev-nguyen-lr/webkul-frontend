import React from 'react';
import styled, { css } from 'styled-components';

interface CustomButtonProps {
  variant?: 'primary' | 'outline' | 'danger' | 'secondary' | 'text'; // Button variants
  size?: 'small' | 'medium' | 'large'; // Optional: Button sizes
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // Additional classes for styling
  type?: 'button' | 'submit' | 'reset'; // Adding type for button types
}

// Define sizes for the button
const buttonSizes = {
  small: css`
    font-size: 12px;
    padding: 7px 15px;
    min-width: 140px;
  `,
  medium: css`
    font-size: 16px;
    padding: 10px 16px;
    min-width: 140px;
  `,
  large: css`
    font-size: 20px;
    padding: 12px 20px;
    min-width: 140px;
  `,
};

// Define variants for the button
const buttonVariants = {
  primary: css`
    background-color: #333;
    color: white;
    &:hover {
      background-color: #000;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
  `,
  outline: css`
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    &:hover {
      background-color: #007bff;
      color: white;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
    &:hover {
      background-color: #c82333;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    &:hover {
      background-color: #5a6268;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.5);
    }
  `,
  text: css`
    background-color: transparent;
    color: #007bff;
    &:hover {
      color: #0056b3;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
  `,
};

// Styled Button component
const StyledButton = styled.button<{
  variant: 'primary' | 'outline' | 'danger' | 'secondary' | 'text';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  ${(props) => buttonSizes[props.size]}
  ${(props) => buttonVariants[props.variant]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary', // Default variant
  size = 'medium', // Default size
  disabled = false,
  onClick,
  children,
  className = '',
  type = 'button', // Default button type
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type} // Pass the type to the native button element
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
