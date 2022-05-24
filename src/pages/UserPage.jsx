import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const UserPage = ({ user }) => {
  const { fetchPosts } = useActions()
  const { postData } = useSelector(state => state.users)
  // console.log(currentPosts)

  useEffect(() => {
    fetchPosts(user.id)
  }, [])

  return (
    <div>
      <h1>Страница пользователя {user.name}</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
      {postData.slice(0, 3).map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      <Link to='/posts'>больше постов</Link>
    </div>
  )
}
