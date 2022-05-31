import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Error } from '../error/Error'
import { NavBar } from '../navbar/NavBar'
import { Preloader } from '../preloader/Preloader'
import { useActions } from '../../hooks/useActions'

export const Layout = () => {
  const { isLoading, error } = useSelector(state => state.users)
  const { setError } = useActions()
  return (
    <>
      <NavBar setError={setError} />
      {isLoading && <Preloader />}
      {error && <Error error={error} />}
      <Outlet />
    </>
  )
}
