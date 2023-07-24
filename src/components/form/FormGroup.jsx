import React from 'react'

export const FormGroup = ({label, name, type='text', required = false}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input style={{width: "80%", height: "30px", border: "1px solid gray", borderRadius: "5px"}} type={type} name={name} placeholder={label} id={name} required={required} />
    </div>
  )
}
