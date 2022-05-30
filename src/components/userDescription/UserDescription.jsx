import React from 'react'
import { Title } from '../UI/title/Title'
import s from './userDescription.module.css'

export const UserDescription = ({ user }) => {
  return (
    <>
      <Title>Страница пользователя {user.name}</Title>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    </>
  )
}
