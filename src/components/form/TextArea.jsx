import React from 'react'

export const TextArea = ({
  label,
  name,
  rows = 10,
  cols = 30,
  required = false,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <textarea
        rows={rows}
        cols={cols}
        name={name}
        id={name}
        required={required}
      />
    </div>
  )
}
