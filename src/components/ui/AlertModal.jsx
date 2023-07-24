import React from 'react'

export const AlertModal = ({title, open, onClose,}) => {
  return (
    <div className={open ? 'alert-modal active' : 'alert-modal'}>
        <p>{title}</p>
    </div>
  )
}
