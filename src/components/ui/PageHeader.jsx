import React from 'react'

export const PageHeader = ({title,children}) => {
  return (
    <div className='pageHader'>
        <div className="pageHeader-row">
            <h3 className='pageHader-title'>{title}</h3>
            <div className="pageHader-children">
                {children}
            </div>
        </div>
    </div>
  )
}
