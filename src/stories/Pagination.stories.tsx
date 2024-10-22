import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination from '../components/atoms/pagination'; // Adjust the path

const meta: Meta<typeof Pagination> = {
  title: 'Component/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
    },
    totalPages: {
      control: 'number',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to wrap Pagination and manage its state locally
const PaginationWrapper: React.FC<any> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

// Default Pagination story
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'medium',
  },
  render: (args) => <PaginationWrapper {...args} />,
};

// Pagination with small size
export const SmallPagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'small',
  },
  render: (args) => <PaginationWrapper {...args} />,
};

// Pagination with large size
export const LargePagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'large',
  },
  render: (args) => <PaginationWrapper {...args} />,
};
