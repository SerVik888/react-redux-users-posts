import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1>Страница не найдена чтобы перейти к списку пользователей нажмите</h1>
      <Link to='/'>здесь</Link>
    </div>
  )
}
