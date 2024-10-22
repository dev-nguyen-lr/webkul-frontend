import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Ensure this is still imported
import { FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';

// Interface for the component props
interface DateRangePickerProps {
  dateFormat?: string;
}

// Styled Components
const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Replaces space-x-4 */
`;

const CalendarIcon = styled(FiCalendar)`
  font-size: 1.25rem; /* Replaces text-xl */
  color: #4b5563; /* Icon color */
`;

const StyledDatePickerWrapper = styled.div`
  position: relative;
`;

const StyledDatePickerInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px; /* Replaces px-2 py-1 */
  font-size: 16px;
  color: #374151;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const DateSeparator = styled.span`
  font-size: 1rem;
  color: #4b5563;
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({ dateFormat = "yyyy/MM/dd" }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined); // Use undefined
  const [endDate, setEndDate] = useState<Date | undefined>(undefined); // Use undefined

  return (
    <DateRangeWrapper>
      {/* Calendar icon */}
      <CalendarIcon />

      {/* Start date input */}
      <StyledDatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date | undefined)} // Allow undefined
          dateFormat={dateFormat} // Pass dateFormat from props
          placeholderText="Start Date"
          selectsStart
          startDate={startDate}
          endDate={endDate}
          popperPlacement="bottom-start"
          customInput={<StyledDatePickerInput />} /* Custom input styled by styled-components */
        />
      </StyledDatePickerWrapper>

      <DateSeparator>~</DateSeparator> {/* Date separator */}

      {/* End date input */}
      <StyledDatePickerWrapper>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date as Date | undefined)} // Allow undefined
          dateFormat={dateFormat} // Pass dateFormat from props
          placeholderText="End Date"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={<StyledDatePickerInput />} /* Custom input styled by styled-components */
        />
      </StyledDatePickerWrapper>
    </DateRangeWrapper>
  );
};

export default DateRangePicker;
