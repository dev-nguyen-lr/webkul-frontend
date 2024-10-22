import React from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: 'small' | 'medium' | 'large'; // Size prop for dynamic sizing
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'medium',
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const maxVisibleButtons = 5;

  const getPageNumbers = () => {
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
  };

  const pages = getPageNumbers();

  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: '12px' },
    medium: { padding: '6px 12px', fontSize: '14px' },
    large: { padding: '8px 16px', fontSize: '16px' },
  };

  const buttonStyle = (isActive: boolean, isDisabled: boolean = false) => ({
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: isActive ? '#007bff' : '#fff',
    color: isActive ? '#fff' : '#000',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    margin: '0 4px',
    ...sizeStyles[size],
    ...(isDisabled && { opacity: 0.5 }),
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        style={buttonStyle(false, isFirstPage)}
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>

      {pages[0] > 1 && (
        <>
          <button style={buttonStyle(false)} onClick={() => onPageChange(1)}>
            1
          </button>
          {pages[0] > 2 && <span style={{ margin: '0 4px' }}>...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          style={buttonStyle(page === currentPage)}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span style={{ margin: '0 4px' }}>...</span>}
          <button style={buttonStyle(false)} onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      <button
        style={buttonStyle(false, isLastPage)}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
