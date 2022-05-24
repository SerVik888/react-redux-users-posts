import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const ListOfUsers = ({ users }) => {
  const { setCurrentUser } = useActions()
  // console.log(Link)
  return (
    <>
      <h1>Список пользователей</h1>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.address.city}</p>
          <Link to='user' onClick={() => setCurrentUser(user)}>
            Подробнее
          </Link>
        </div>
      ))}
    </>
  )
}
