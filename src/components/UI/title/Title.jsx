import React from 'react'
import s from './title.module.css'

export const Title = ({ theme, children }) => {
  return <h1 className={theme === 'white' ? s.white_title : s.title}>{children}</h1>
}
