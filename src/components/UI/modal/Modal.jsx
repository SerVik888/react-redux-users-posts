import React from 'react'
import s from './modalForm.module.css'

export const Modal = ({ activeModal, setActiveModal, children }) => {
  return (
    <div className={activeModal ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActiveModal(false)}>
      <div
        className={activeModal ? `${s.modal_content} ${s.active}` : s.modal_content}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
