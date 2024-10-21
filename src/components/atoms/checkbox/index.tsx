import React from 'react'

interface CheckBoxProps {
  id?: string
  name?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="inline-flex items-center relative">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className=" 
        w-8 h-8 border-3 border-gray-300 rounded-2 cursor-pointer appearance-none bg-white inline-block relative	
        checked:border-blue-0 
        checked:after:top-[38%] checked:after:absolute checked:after:left-[50%] checked:after:w-[6px] checked:after:h-[10px]
        checked:after:border-r-3 checked:after:border-b-3 checked:after:border-blue-0
        checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rotate-45
        "
        disabled={disabled}
      />
      <label htmlFor={id} className="ml-2 text-gray-800">
        {label}
      </label>
    </div>
  )
}

export default CheckBox
