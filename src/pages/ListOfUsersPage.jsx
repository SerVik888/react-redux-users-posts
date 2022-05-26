import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const ListOfUsers = ({ users }) => {
  // const { setCurrentUser } = useActions()
  const { fetchCurrentUser } = useActions()
  // const param = useParams()
  // console.log(param)
  return (
    <>
      <h1>Список пользователей</h1>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.address.city}</p>
          <Link to={`user/${user.id}`} onClick={() => fetchCurrentUser(user.id)}>
            Подробнее
          </Link>
        </div>
      ))}
    </>
  )
}
