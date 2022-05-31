import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../UI/title/Title'
import s from './navBar.module.css'
import { Button } from '../UI/button/Button'

export const NavBar = ({ setError }) => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
    setError('')
  }
  const goHome = () => {
    navigate('/')
    setError('')
  }

  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div>
          <Title theme={'white'} className={s.header_title}>
            Список пользователей
          </Title>
        </div>
        <div>
          <Button theme={'white'} onClick={goBack}>
            Назад
          </Button>{' '}
          <Button theme={'white'} onClick={goHome}>
            На главную
          </Button>
        </div>
      </div>
    </header>
  )
}
