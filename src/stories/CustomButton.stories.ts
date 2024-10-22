import { action } from '@storybook/addon-actions'; // To track onClick action
import CustomButton from '../components/atoms/custom-button'; // Adjust the path to your CustomButton component
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CustomButton> = {
  title: 'Component/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered', // Center the component in the canvas
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select', // Dropdown to select variants
      options: ['primary', 'outline', 'danger', 'secondary', 'text'], // Available variants
    },
    size: {
      control: 'select', // Dropdown to select size
      options: ['small', 'medium', 'large'], // Available sizes
    },
    disabled: {
      control: 'boolean', // Toggle to enable/disable the button
    },
    onClick: { action: 'clicked' }, // Track the onClick action in Storybook's actions panel
  },
  args: {
    variant: 'primary', // Default variant
    size: 'medium', // Default size
    disabled: false, // Default disabled state
    children: 'Button', // Default button label
    onClick: action('clicked'), // Track the onClick action
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with default args
export const Default: Story = {
  args: {},
};

// Story for the primary button
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Story for the outline button
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Story for the danger button
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

// Story for the secondary button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Story for the text button
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};
