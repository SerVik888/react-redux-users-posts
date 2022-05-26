import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './navBar.module.css'

export const NavBar = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const goHome = () => {
    navigate('/')
  }

  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div>
          <h1 className={s.header_title}>Список пользователей</h1>
        </div>
        <div>
          <button className={s.btn} onClick={goBack}>
            назад
          </button>
          <button className={s.btn} onClick={goHome}>
            На главную
          </button>
        </div>
      </div>
    </header>
  )
}
