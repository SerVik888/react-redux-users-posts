import React from 'react'
import s from './error.module.css'

export const Error = ({ error }) => {
  return (
    <div className={s.error_wrapper}>
      <h1>{error}</h1>
    </div>
  )
}
