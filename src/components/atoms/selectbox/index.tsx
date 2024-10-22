import React from 'react';
import styled from 'styled-components';

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options: Option[];
  placeholder?: string;
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean; // New prop to handle disabled state
}

// Styled Components
const SelectBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledSelect = styled.select<{ disabled: boolean }>`
  display: block;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : 'white')}; /* Change color if disabled */
  border: 1px solid ${({ disabled }) => (disabled ? '#d1d5db' : '#d1d5db')};
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#4b5563')}; /* Change text color if disabled */
  padding: 8px 40px 8px 16px; /* Adjust padding for more spacing */
  border-radius: 4px;
  appearance: none;
  line-height: 1.5;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; /* Change cursor if disabled */
  height: 45px; /* Adjust height to fit the design */

  &:focus {
    outline: none;
    border-color: ${({ disabled }) => (disabled ? '#d1d5db' : '#3b82f6')};
  }

  &:hover {
    border-color: ${({ disabled }) => (disabled ? '#d1d5db' : '#007ebe')};
  }
`;

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #4b5563;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder,
  selectedValue,
  onChange,
  disabled = false, // Default value of disabled is false
}) => {
  return (
    <SelectBoxWrapper>
      <StyledSelect
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled} // Pass the disabled prop to StyledSelect
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>

      <IconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12l5-5H5l5 5z" /> {/* Simple down arrow */}
        </svg>
      </IconWrapper>
    </SelectBoxWrapper>
  );
};

export default SelectBox;
