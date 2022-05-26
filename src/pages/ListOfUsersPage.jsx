import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FlexContainer } from '../components/flexContainer/FlexContainer'
import { User } from '../components/userCard/UserCard'
import { useActions } from '../hooks/useActions'

export const ListOfUsers = ({ users }) => {
  // const { setCurrentUser } = useActions()
  const { fetchCurrentUser } = useActions()
  // const param = useParams()
  // console.log(param)
  return (
    <>
      <h1>Список пользователей</h1>
      <FlexContainer>
        {users.map(user => (
          // <div key={user.id}>
          <User user={user} key={user.id} />
          // </div>
        ))}
      </FlexContainer>
    </>
  )
}
