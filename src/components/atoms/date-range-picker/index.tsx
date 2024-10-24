import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from "react-icons/bs";

// Utility to format date with a custom format
const formatDate = (date: Date | null, dateFormat: string) => {
  if (!date) return '';
  return format(date, dateFormat);
};

// Styled Components
const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const InputField = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
  width: 150px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const CalendarWrapper = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  top: ${(props) => `${props.position.top}px`};
  left: ${(props) => `${props.position.left}px`};
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 100;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 0;
  background: #e9e9e9;
  border: 1px solid #ddd;
`;

const MonthNavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 6px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: black;
  transition: border 0.2s ease;

  &:hover {
    border: 1px solid gray;
  }
`;

const DaysOfWeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-top: 8px;
  text-align: center;
  font-weight: bold;
  color: #4b5563;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-top: 8px;
`;

const Day = styled.div<{ isSelected: boolean; isToday: boolean; isInRange: boolean }>`
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? '#007fff'
      : props.isInRange
      ? '#93c5fd'
      : props.isToday
      ? '#fffa90'
      : '#f6f6f6'};
  color: ${(props) => (props.isSelected || props.isInRange ? '#fff' : '#000')};
  &:hover {
    background-color: #ededed;
  }
`;

const DateSeparator = styled.span`
  font-size: 1rem;
  color: #4b5563;
`;

// Helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Main component
const DateRangePicker = ({ dateFormat = 'yyyy/MM/dd' }: { dateFormat?: string }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null); // Ref for the calendar

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (showStartCalendar) {
      setStartDate(selectedDate);
      setEndDate(null); // reset end date when starting a new range
      setShowStartCalendar(false);
      setShowEndCalendar(true); // Open end date calendar after selecting start date
    } else if (showEndCalendar) {
      if (startDate && selectedDate > startDate) {
        setEndDate(selectedDate);
        setShowEndCalendar(false); // close calendar after selecting end date
      } else {
        setStartDate(selectedDate);
        setEndDate(null);
        setShowEndCalendar(false); // close calendar
      }
    }
  };

  const handleCalendarPosition = (ref: React.RefObject<HTMLInputElement>, inputType: 'start' | 'end') => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      if(inputType === 'start') {
        setCalendarPosition({
          top: rect.bottom - rect.top,
          left: 0,
        });
      } else {
        setCalendarPosition({
          top: rect.bottom - rect.top,
          left: 35 + rect.right - rect.left,
        });
      }
    }
  };

  useEffect(() => {
    if (showStartCalendar) {
      handleCalendarPosition(startDateInputRef, 'start');
    } else if (showEndCalendar) {
      handleCalendarPosition(endDateInputRef, 'end');
    }
  }, [showStartCalendar, showEndCalendar]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const today = new Date();

  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const currentDate = new Date(currentYear, currentMonth, day);
    return currentDate >= startDate && currentDate <= endDate;
  };

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.

  // Create an array of empty cells for days before the first day of the month
  const blankDays = Array.from({ length: firstDayOfMonth }, (_, i) => <div key={`blank-${i}`} />);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) && 
        !startDateInputRef.current?.contains(event.target as Node) &&
        !endDateInputRef.current?.contains(event.target as Node)
      ) {
        setShowStartCalendar(false);
        setShowEndCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DateRangeWrapper>
      {/* Start date input */}
      <InputField
        type="text"
        placeholder="Start Date"
        value={formatDate(startDate, dateFormat)}
        onClick={() => {
          setShowStartCalendar(true);
          setShowEndCalendar(false);
        }}
        readOnly
        ref={startDateInputRef}
      />

      <DateSeparator>~</DateSeparator>

      {/* End date input */}
      <InputField
        type="text"
        placeholder="End Date"
        value={formatDate(endDate, dateFormat)}
        onClick={() => {
          setShowEndCalendar(true);
          setShowStartCalendar(false);
        }}
        readOnly
        ref={endDateInputRef}
      />

      {/* Calendar component */}
      {(showStartCalendar || showEndCalendar) && (
        <CalendarWrapper ref={calendarRef} position={calendarPosition}>
          <CalendarHeader>
            <MonthNavButton onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}>
              <BsCaretLeftSquareFill />
            </MonthNavButton>
            {`${currentYear}年 ${currentMonth + 1}月`}
            <MonthNavButton onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}>
              <BsCaretRightSquareFill />
            </MonthNavButton>
          </CalendarHeader>

          {/* Weekdays in Chinese */}
          <DaysOfWeekGrid>
            <div>日</div> <div>一</div> <div>二</div> <div>三</div> <div>四</div> <div>五</div> <div>六</div>
          </DaysOfWeekGrid>

          <DaysGrid>
            {blankDays}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <Day
                key={day}
                isSelected={startDate?.getDate() === day || endDate?.getDate() === day}
                isToday={today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear}
                isInRange={isInRange(day)}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </Day>
            ))}
          </DaysGrid>
        </CalendarWrapper>
      )}
    </DateRangeWrapper>
  );
};

export default DateRangePicker;
