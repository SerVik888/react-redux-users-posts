import React from 'react'
import s from './button.module.css'

export const Button = ({ theme, onClick, disabled, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={theme === 'dark' ? `${s.btn} ${s.dark}` : `${s.btn} ${s.white}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
