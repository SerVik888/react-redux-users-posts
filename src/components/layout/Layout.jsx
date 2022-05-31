import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar/NavBar'
import { Preloader } from '../preloader/Preloader'

export const Layout = () => {
  const { isLoading, error } = useSelector(state => state.users)

  return (
    <>
      <NavBar />
      {isLoading && <Preloader />}
      <Outlet />
    </>
  )
}
