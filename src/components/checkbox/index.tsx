import React from 'react'

interface CheckboxProps {
  id?: string
  name?: string
  label?: string
  checked?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="inline-flex items-center relative">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="custom-checkbox"
        // className={`
        //   appearance-none w-5 h-5 cursor-pointer border-2 border-gray-300 bg-white focus:outline-none
        //   ${checked ? 'border-blue-500' : ''}
        //   relative
        // `}
      />
      {/* {checked && (
        <span
          style={{
            width: '4px', // Set width in pixels
            height: '8px', // Set height in pixels
            borderBottom: '2px solid #007ebe',
            borderRight: '2px solid #007ebe',
            position: 'absolute',
            transform: 'rotate(45deg)',
            left: '3px',
            top: '1px',
          }}
        />
      )} */}
      <label htmlFor={id} className="ml-2 text-gray-800">
        {label}
      </label>
    </div>
  )
}

export default Checkbox
