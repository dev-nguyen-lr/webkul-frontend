import { Meta, StoryFn } from '@storybook/react'
import { FiSearch, FiLock, FiMail } from 'react-icons/fi'
import { useState } from 'react'
import CustomInput from '../components/atoms/custom-input' // Adjust path to your CustomInput component

const meta: Meta<typeof CustomInput> = {
  title: 'Component/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered', // Center the component in the canvas
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select', // Dropdown for input type
      options: ['text', 'password', 'email'], // Available input types
    },
    required: {
      control: 'boolean', // Toggle for required field
    },
    minLength: {
      control: 'number', // Number input for minimum length
    },
    hoverColor: {
      control: 'color', // Color picker for hover color
    },
    icon: {
      control: 'select', // Dropdown for selecting an icon
      options: ['none', 'search', 'lock', 'mail'], // Available icon options
      mapping: {
        none: null,
        search: <FiSearch />,
        lock: <FiLock />,
        mail: <FiMail />,
      },
    },
  },
  args: {
    placeholder: 'Enter text...', // Default placeholder
    hoverColor: '#3b82f6', // Default hover color
    value: '', // Default value (will be managed locally in each story)
    onChange: undefined, // The onChange handler will be set in each story
    type: 'text', // Default input type
    required: false, // Default: not required
    minLength: 0, // Default minLength
  },
}

export default meta
type Story = StoryFn<typeof CustomInput>

// Default story with local state
export const Default: Story = () => {
  const [value, setValue] = useState('') // Manage state for input value
  return (
    <CustomInput
      placeholder="Enter text..."
      value={value}
      onChange={setValue} // Update the state when typing
      hoverColor="#3b82f6"
    />
  )
}

// Story for search input with local state and icon
export const SearchInput: Story = () => {
  const [value, setValue] = useState('') // Manage state for input value
  return (
    <CustomInput
      placeholder="Search..."
      icon={<FiSearch />}
      value={value}
      onChange={setValue} // Update the state when typing
      hoverColor="#007bff"
    />
  )
}

// Story for password input with validation, local state, and lock icon
export const PasswordInput: Story = () => {
  const [value, setValue] = useState('') // Manage state for input value
  return (
    <CustomInput
      placeholder="Enter your password"
      type="password"
      icon={<FiLock />}
      value={value}
      onChange={setValue} // Update the state when typing
      required={true}
      minLength={8}
      hoverColor="#ff0000"
      validate={(value: string) => {
        if (!/[A-Z]/.test(value)) {
          return 'Password must contain at least one uppercase letter'
        }
        if (!/[0-9]/.test(value)) {
          return 'Password must contain at least one number'
        }
        return null
      }}
    />
  )
}

// Story for email input with local state and email icon
export const EmailInput: Story = () => {
  const [value, setValue] = useState('') // Manage state for input value
  return (
    <CustomInput
      placeholder="Enter your email"
      type="email"
      icon={<FiMail />}
      value={value}
      onChange={setValue} // Update the state when typing
      required={true}
      hoverColor="#28a745"
      validate={(value: string) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailPattern.test(value)) {
          return 'Invalid email format'
        }
        return null
      }}
    />
  )
}
