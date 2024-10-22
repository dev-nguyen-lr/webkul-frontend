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
}

// Styled Components
const SelectBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  background-color: white;
  border: 1px solid #d1d5db;
  color: #4b5563;
  padding: 8px 40px 8px 16px; /* Adjust padding for more spacing */
  border-radius: 4px;
  appearance: none;
  line-height: 1.5;
  font-size: 16px;
  cursor: pointer;
  height: 45px; /* Adjust height to fit the design */

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  &:hover {
    border-color: #007ebe;
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
}) => {
  return (
    <SelectBoxWrapper>
      <StyledSelect
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
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
