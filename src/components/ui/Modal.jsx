import React from "react"
import { createPortal } from "react-dom"









function Modal({ children, isOpen, onClose }) {

    if (!isOpen) {
        return null
    }


    return (
        <>
            {createPortal(
                <div className="modal">{children}</div>, document.querySelector('.')
            )}
        </>
    )
}
export default Modal