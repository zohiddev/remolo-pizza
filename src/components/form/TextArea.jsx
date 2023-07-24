import React from 'react'

export const TextArea = ({label, name, rows=5, cols=100, required = false}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>
            {label}
        </label>
        <textarea style={{width: '80%', height: '50px'}} name={name} id={name} cols={cols} rows={rows} required={required}></textarea>
    </div>
  )
}
