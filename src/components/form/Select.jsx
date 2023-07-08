import React from 'react'

export const Select = ({ options, defaultValue, name }) => {
  return (
    <select defaultValue={defaultValue} name={name}>
      {options.map((item, key) => (
        <option value={item.value} key={key}>
          {item.label}
        </option>
      ))}
    </select>
  )
}
