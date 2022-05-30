import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar/NavBar'

export const Layout = () => {
  const { isLoading, error } = useSelector(state => state.users)
  console.log(isLoading, error)
  if (isLoading) {
    // return <h1>Подождите идёт загрузка данных....</h1>
    // return <h1>{error}</h1>
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
