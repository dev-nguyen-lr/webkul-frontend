import { action } from '@storybook/addon-actions' // To track onChange action

import RadioBox from '@/components/radiobox'
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
    checked: { control: 'boolean' }, // Fix the type definition
    label: { control: 'text' }, // Fix the type definition
    onChange: { action: 'changed' }, // Use action to track events
  },
  args: {
    checked: false, // Default checked value
    label: 'Default Label', // Default label
    onChange: action('changed'), // Using the action addon to track changes
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Radio',
  },
}
