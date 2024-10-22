import { action } from '@storybook/addon-actions'; // To track onChange action
import SelectBox from '../components/atoms/selectbox'; // Adjust the import path based on your structure
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectBox> = {
  title: 'Component/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValue: { control: 'text' }, // Allow control for selected value
    placeholder: { control: 'text' }, // Allow control for placeholder
    options: { control: 'object' }, // Allow control for options as an object
    onChange: { action: 'changed' }, // Track changes via action addon
  },
  args: {
    selectedValue: '', // Default selected value
    placeholder: 'Select an option', // Default placeholder
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ], // Default options for the SelectBox
    onChange: action('changed'), // Using the action addon to track changes
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    selectedValue: '',
  },
};

export const PreSelected: Story = {
  args: {
    placeholder: 'Select an option',
    selectedValue: 'option2', // Pre-selected value
  },
};
