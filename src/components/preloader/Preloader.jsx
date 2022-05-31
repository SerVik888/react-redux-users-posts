import React from 'react'
import preloader from './Preloader.svg'
import s from './preloader.module.css'

export const Preloader = () => {
  return (
    <div className={s.preloader_wrapper}>
      <img src={preloader} />
    </div>
  )
}
