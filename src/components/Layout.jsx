import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <header>
        <Link to='/'>Список пользователей</Link>
        <Link to='/posts'>Список постов</Link>
        <Link to='/post'>пост</Link>
        <Link to='/user'>Пользователь</Link>
      </header>
      <Outlet />
    </>
  )
}
