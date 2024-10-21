import React from 'react'

interface RadioBoxProps {
  id?: string
  label: string
  checked?: boolean
  name?: string
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const RadioBox: React.FC<RadioBoxProps> = ({
  id,
  label,
  checked,
  disabled = false,
  onChange,
  name,
}) => {
  return (
    <div className="inline-flex items-center relative">
      <input
        type="radio"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        // className="form-radio h-5 w-5 text-blue-500"
        className="form-radio
        w-8 h-8 border-3 border-gray-300 rounded-[50%] cursor-pointer appearance-none bg-white inline-block relative	
        "
        name={name}
      />
      <label htmlFor={id} className="ml-2 text-gray-800">
        {label}
      </label>
    </div>
  )
}

export default RadioBox
