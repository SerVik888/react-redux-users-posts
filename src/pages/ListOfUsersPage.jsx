import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { UserCard } from '../components/userCard/UserCard'
import { useActions } from '../hooks/useActions'

export const ListOfUsers = () => {
  const { userData } = useSelector(state => state.users)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <h1>Список пользователей</h1>
      <FlexContainer>
        {userData.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </FlexContainer>
    </>
  )
}
