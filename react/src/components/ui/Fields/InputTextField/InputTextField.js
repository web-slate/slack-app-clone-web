import React from 'react'

export default function InputTextField({
  name,
  initialValue = '',
  value,
  placeholder,
  handleChange,
  onBlur,
  ...props
}) {
  const onChange = (event) => {
    handleChange(event)
  }

  return (
    <div>
      <input
        {...props}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value || initialValue}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}
