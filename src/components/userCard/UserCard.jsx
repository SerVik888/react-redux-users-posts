import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './userCard.module.css'

export const User = ({ user }) => {
  const navigate = useNavigate()
  const goUserPage = () => {
    navigate(`user/${user.id}`)
  }
  return (
    <>
      <div className={s.user_wrapper}>
        <h5 className={s.user_title}>{user.name}</h5>
        <p className={s.user_city}>{user.address.city}</p>
        <button className={s.btn} onClick={goUserPage}>
          Смотреть профиль
        </button>
      </div>
    </>
  )
}
