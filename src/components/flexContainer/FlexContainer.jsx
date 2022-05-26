import React from 'react'
import s from './flexContainer.module.css'

export const FlexContainer = ({ children }) => {
  return <div className={s.flex}>{children}</div>
}
