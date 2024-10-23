import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Ensure this is still imported
import styled from 'styled-components';

// Interface for the component props
interface DateRangePickerProps {
  dateFormat?: string;
}

// Styled Components
const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Spacing between inputs */
`;

const StyledDatePickerWrapper = styled.div`
  position: relative;
`;

const StyledDatePickerInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

// Customize the Datepicker calendar popper to match the design
const CustomPopperContainer = styled.div`
  .react-datepicker {
    font-size: 14px; /* Adjust font size */
    border-radius: 10px;
    border: 1px solid #d1d5db;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .react-datepicker__header {
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 0;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: bold;
    color: #111827;
    height: 20px;
    padding: 12px;
    background: #e9e9e9;
  }

  .react-datepicker__day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    color: #6b7280;
  }

  .react-datepicker__day {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin: 2px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      background-color: #f3f4f6;
    }
  }

  .react-datepicker__day--selected {
    background-color: #2563eb;
    color: white;
  }

  .react-datepicker__triangle {
    display: none; /* Hide the triangle */
  }

  .react-datepicker__month-container {
    width: auto; /* Ensure proper size for calendar */
  }
`;

const DateSeparator = styled.span`
  font-size: 1rem;
  color: #4b5563;
`;

// Main DateRangePicker Component
const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateFormat = 'dd/MM/yyyy',
}) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <DateRangeWrapper>
      {/* Start date input */}
      <StyledDatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date | undefined)}
          dateFormat={dateFormat}
          placeholderText="Start Date"
          selectsStart
          startDate={startDate}
          endDate={endDate}
          popperPlacement="bottom-start"
          calendarContainer={({ children }) => (
            <CustomPopperContainer>{children}</CustomPopperContainer>
          )}
          customInput={<StyledDatePickerInput />}
        />
      </StyledDatePickerWrapper>

      <DateSeparator>~</DateSeparator>

      {/* End date input */}
      <StyledDatePickerWrapper>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date as Date | undefined)}
          dateFormat={dateFormat}
          placeholderText="End Date"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          popperPlacement="bottom-end"
          calendarContainer={({ children }) => (
            <CustomPopperContainer>{children}</CustomPopperContainer>
          )}
          customInput={<StyledDatePickerInput />}
        />
      </StyledDatePickerWrapper>
    </DateRangeWrapper>
  );
};

export default DateRangePicker;
