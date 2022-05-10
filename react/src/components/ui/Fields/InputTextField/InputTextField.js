import React, { useState, forwardRef } from 'react'

const noop = () => {}

const InputTextField = forwardRef(
  (
    {
      name,
      initialValue = '',
      placeholder,
      handleChange,
      onChange = noop,
      onBlur = noop,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

export default InputTextField
