import Alert from '../components/atoms/alert' // Adjust the path to the correct location of your Alert component
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['success', 'error'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    type: 'success',
    children: '会社の情報が正常に保存されました。', // Default children (text)
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Define stories with `children` instead of `message`
export const Success: Story = {
  args: {
    type: 'success',
    children: '会社の情報が正常に保存されました。',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    children: '△△ は XX です、入力を確認してください。',
  },
}
