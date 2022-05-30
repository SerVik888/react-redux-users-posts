import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { Title } from '../components/UI/title/Title'
import { UserCard } from '../components/userCard/UserCard'
import { useActions } from '../hooks/useActions'

export const ListOfUsers = () => {
  const { userData, isLoading, error } = useSelector(state => state.users)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) {
    return <Title>Подождите идёт загрузка данных....</Title>
  }

  return (
    <>
      <Title>Список пользователей</Title>
      <FlexContainer>
        {userData.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </FlexContainer>
    </>
  )
}
