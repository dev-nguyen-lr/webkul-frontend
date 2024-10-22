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
    onPageChange: undefined, // Handled locally in each story
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Pagination story
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'medium',
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  },
};

// Pagination with small size
export const SmallPagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'small',
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  },
};

// Pagination with large size
export const LargePagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'large',
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  },
};
