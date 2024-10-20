import React from 'react'

interface RadioBoxProps {
  id?: string
  label: string
  checked?: boolean
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioBox: React.FC<RadioBoxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="inline-flex items-center relative">
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        // className="form-radio h-5 w-5 text-blue-500"
        className="custom-radio"
      />
      <label htmlFor={id} className="ml-2 text-gray-800">
        {label}
      </label>
    </div>
  )
}

export default RadioBox
