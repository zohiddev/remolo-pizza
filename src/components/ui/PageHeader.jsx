import React from 'react'

export const PageHeader = ({ title, children }) => {
  return (
    <div className='pageHeader'>
      <div className='pageHeader-row'>
        <h3 className='pageHeader-title'>{title}</h3>
        <div className='pageHeader-children__wrapper'>{children}</div>
      </div>
    </div>
  )
}
