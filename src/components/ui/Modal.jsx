import React from 'react'
import { useEffect } from 'react'
import Loader from './Loader'

export const Modal = ({ open, onClose, onOk, loading}) => {
    useEffect(() => {
        const backdrop = document.querySelector('.modal-backdrop')
        backdrop.addEventListener('click', onClose)
        return () => backdrop.removeEventListener('click', onClose)
    })
  return (
    <div className={open ? 'modal open' : 'modal'}>
        <div className="modal-backdrop"></div>
        <div className="modal-panel">
            <button className='x' onClick={onClose}>x</button>
            <div className="div"><h4>Вы точно хотите удалить   ?</h4></div>
            <div className="div">
              <button onClick={onClose}>No</button>
              <button className='danger' onClick={onOk}>
                Yes{loading ? <Loader/> : ""}
              </button>
            </div>
        </div>
    </div>
  )
}
  