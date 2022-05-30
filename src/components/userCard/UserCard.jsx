import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../UI/button/Button'
import s from './userCard.module.css'

export const UserCard = ({ user }) => {
  const navigate = useNavigate()
  const goUserPage = () => {
    navigate(`user/${user.id}`)
  }
  return (
    <>
      <div className={s.user_wrapper}>
        <h5 className={s.user_title}>{user.name}</h5>
        <p className={s.user_city}>{user.address.city}</p>
        <Button theme={'dark'} onClick={goUserPage}>
          Смотреть профиль
        </Button>
      </div>
    </>
  )
}
