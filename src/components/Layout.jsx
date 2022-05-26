import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Layout = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const goHome = () => {
    navigate('/')
  }
  return (
    <>
      <header>
        <button onClick={goBack}>назад</button>
        <button onClick={goHome}>К списку пользователей</button>
      </header>
      <Outlet />
    </>
  )
}
