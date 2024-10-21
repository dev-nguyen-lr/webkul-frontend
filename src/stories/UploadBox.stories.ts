import UploadBox from '@/components/atoms/upload-box'
import type { Meta, StoryObj } from '@storybook/react'
import '../app/globals.css'

const meta: Meta<typeof UploadBox> = {
  title: 'Component/UploadBox',
  component: UploadBox,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
