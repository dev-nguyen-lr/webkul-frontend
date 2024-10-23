import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

// Interface for Pagination Props
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: 'small' | 'medium' | 'large'; // Size prop for dynamic sizing
}

// Styled-components for Pagination
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* Add some space between the buttons */
`;

const Button = styled.button<{ isDisabled: boolean; size: string }>`
  border: 1px solid #333;
  border-radius: 3px;
  background-color: #f5f5f5;
  color: #000;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  margin: 0 4px;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  &:hover {
    background: #000;
    color: #fff;
  }
  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 4px 8px;
      font-size: 12px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 6px 12px;
      font-size: 14px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 8px 16px;
      font-size: 16px;
    `}
`;

const PageNumberDisplay = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 0 8px;
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'medium',
}) => {
  // Memoized logic for determining whether we are on the first or last page
  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isLastPage = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);

  // Memoize the display for current page / total pages
  const pageDisplay = useMemo(() => `${currentPage}/${totalPages}`, [currentPage, totalPages]);

  return (
    <PaginationWrapper>
      {/* First Button */}
      <Button
        size={size}
        isDisabled={isFirstPage}
        onClick={() => !isFirstPage && onPageChange(1)}
        disabled={isFirstPage}
      >
        «
      </Button>

      {/* Previous Button */}
      <Button
        size={size}
        isDisabled={isFirstPage}
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        ‹
      </Button>

      {/* Page Number Display */}
      <PageNumberDisplay>
        {pageDisplay}
      </PageNumberDisplay>

      {/* Next Button */}
      <Button
        size={size}
        isDisabled={isLastPage}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        ›
      </Button>

      {/* Last Button */}
      <Button
        size={size}
        isDisabled={isLastPage}
        onClick={() => !isLastPage && onPageChange(totalPages)}
        disabled={isLastPage}
      >
        »
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
