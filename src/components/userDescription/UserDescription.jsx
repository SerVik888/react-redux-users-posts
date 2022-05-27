import React from 'react'
import s from './userDescription.module.css'

export const UserDescription = ({ user }) => {
  return (
    <>
      <h1>Страница пользователя {user.name}</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    </>
  )
}
