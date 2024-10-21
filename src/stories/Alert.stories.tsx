import { fn } from '@storybook/test';
import Alert from '../components/atoms/alert'; // Adjust the path to the correct location of your Alert component

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { 
      control: 'radio',
      options: ['success', 'error'],
    },
    message: { control: 'text' },
  },
  // Use `fn` to spy on interactions (if needed)
  args: { 
    type: 'success',
    message: '会社の情報が正常に保存されました。',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define different stories with specific arguments (args)
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    type: 'success',
    message: '会社の情報が正常に保存されました。',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: '△△ は XX です、入力を確認してください。',
  },
};
