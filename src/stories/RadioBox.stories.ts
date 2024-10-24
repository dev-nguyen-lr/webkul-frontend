import { action } from '@storybook/addon-actions' // To track onChange action

import RadioBox from '@/components/atoms/radiobox'
import type { Meta, StoryObj } from '@storybook/react'
import '../app/globals.css'

const meta: Meta<typeof RadioBox> = {
  title: 'Component/RadioBox',
  component: RadioBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false, // Default checked value
    label: 'Default Label', // Default label
    onChange: action('changed'), // Using the action addon to track changes
    disabled: false, // Default disabled state
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Radio',
  },
}
