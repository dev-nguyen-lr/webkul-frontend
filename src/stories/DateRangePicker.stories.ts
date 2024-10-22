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
    // No specific controls needed for the DateRangePicker
  },
  args: {
    // You don't need specific args for this since DateRangePicker manages its own state.
    onChange: action('date changed'), // Using the action addon to track changes
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// The default story
export const Default: Story = {};
