// components/Alert/Alert.stories.tsx

import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react'; // Use StoryFn and Meta
import Alert from '../components/alert';

// Define the default export with metadata
export default {
  component: Alert,
  title: 'Components/Alert',
} as Meta;

// Define the type for args
interface AlertArgs {
  type: 'success' | 'error';
  message: string;
}

// Create a template
const Template: StoryFn<AlertArgs> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <Alert
          {...args}
        />
      )}
      <button
        onClick={() => setVisible(!visible)}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Alert
      </button>
    </>
  );
};

// Bind the template to create the story
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: '会社の情報が正常に保存されました。',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: '△△ は XX です、入力を確認してください。',
};
