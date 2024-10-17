import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CustomCheckbox from '@/components/checkbox'

export default {
  title: 'Atoms/CustomCheckbox',
  component: CustomCheckbox,
} as Meta

// Define the type for args
interface CustomCheckboxArgs {
  label: string
  checked: boolean
  onChange: () => void
}

// Create a template
const Template: StoryFn<CustomCheckboxArgs> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <CustomCheckbox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}

// Bind the template to create a story
export const Default = Template.bind({})
Default.args = {
  label: 'Custom Checkbox', // Set the default label for the checkbox here
}
