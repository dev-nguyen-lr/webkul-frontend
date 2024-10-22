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
`;

const Button = styled.button<{ isActive: boolean; isDisabled: boolean; size: string }>`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? '#007bff' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  margin: 0 4px;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};

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

const Ellipsis = styled.span`
  margin: 0 4px;
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'medium',
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const maxVisibleButtons = 5;

  // Memoize the page number calculation
  const pages = useMemo(() => {
    let startPage: number, endPage: number;

    if (totalPages <= maxVisibleButtons) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const offset = Math.floor(maxVisibleButtons / 2);

      if (currentPage <= offset + 1) {
        startPage = 1;
        endPage = maxVisibleButtons;
      } else if (currentPage + offset >= totalPages) {
        startPage = totalPages - maxVisibleButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - offset;
        endPage = currentPage + offset;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [currentPage, totalPages]);

  return (
    <PaginationWrapper>
      {/* Previous Button */}
      <Button
        size={size}
        isActive={false}
        isDisabled={isFirstPage}
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </Button>

      {/* First Page and Ellipsis */}
      {pages[0] > 1 && (
        <>
          <Button size={size} isActive={false} isDisabled={false} onClick={() => onPageChange(1)}>
            1
          </Button>
          {pages[0] > 2 && <Ellipsis>...</Ellipsis>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Button
          key={page}
          size={size}
          isActive={page === currentPage}
          isDisabled={false}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {/* Last Page and Ellipsis */}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <Ellipsis>...</Ellipsis>}
          <Button
            size={size}
            isActive={false}
            isDisabled={false}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}

      {/* Next Button */}
      <Button
        size={size}
        isActive={false}
        isDisabled={isLastPage}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
