import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/UI/button/Button'
import { Title } from '../components/UI/title/Title'

export const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <div>
      <Title>Страница не найдена чтобы перейти к списку пользователей нажмите</Title>
      <Button theme={'dark'} onClick={goHome}>
        здесь
      </Button>
    </div>
  )
}
