import { action } from '@storybook/addon-actions'; // To track onChange action
import DateRangePicker from '../components/atoms/date-range-picker'; // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Component/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered', // Center the component in the canvas
  },
  tags: ['autodocs'],
  argTypes: {
    dateFormat: {
      control: 'text', // Allow user to provide custom date format in Storybook
      description: 'Format for displaying the date (default is yyyy/MM/dd)',
      defaultValue: 'yyyy/MM/dd',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yyyy/MM/dd' },
      },
    },
    // You can add other properties here if needed.
  },
  args: {
    dateFormat: 'yyyy/MM/dd', // Default date format
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// The default story
export const Default: Story = {};

// A story with a custom date format
export const CustomDateFormat: Story = {
  args: {
    dateFormat: 'dd/MM/yyyy', // Example of a custom date format
  },
};
