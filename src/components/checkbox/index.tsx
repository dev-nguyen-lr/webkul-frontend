import React from 'react'

interface CheckboxProps {
  label?: string
  checked: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 border-3 border-gray-300 bg-white appearance-none cursor-pointer relative
          checked:border-blue-600
          checked:before:content-[''] checked:before:block checked:before:w-1 checked:before:h-2 checked:before:absolute checked:before:top-0 checked:before:left-[4px] checked:before:border-b-2 checked:before:border-r-2 checked:before:transform checked:before:rotate-45 checked:before:border-blue-600
        "
      />
      {label && (
        <label className="ml-2 text-gray-700 select-none">{label}</label>
      )}
    </div>
  )
}

export default Checkbox
