import React, { useEffect } from 'react'

export const Drawer = ({title, open, onClose, children}) => {
    useEffect(() => {
        const backdrop = document.querySelector('.drawer-backdrop')
        backdrop.addEventListener('click', onClose)
        return () => backdrop.removeEventListener('click', onClose)
    })
  return (
    <div className={open ? 'drawer open' : 'drawer'}>   
        <div className="drawer-backdrop"></div>
        <div className="drawer-panel">
            <div className="drawer-header">
                <p className="drawer-title"> {title} </p>
                <button className='drawer-close' onClick={onClose}>X</button>
            </div>
            <div className="drawer-body">
            {children}
            </div>
        </div>
    </div>
  )
}
