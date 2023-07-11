import React from 'react'

export const FormGroup = ({ label, name, type = 'text', required = false }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        id={name}
        required={required}
      />
    </div>
  )
}
