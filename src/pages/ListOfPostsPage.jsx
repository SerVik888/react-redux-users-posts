import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const ListOfPosts = () => {
  const { postData, currentUser } = useSelector(state => state.users)
  const { setCurrentPost } = useActions()
  return (
    <>
      <h1>Список постов {currentUser.name}</h1>
      {postData.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Link to='/post' onClick={() => setCurrentPost(post)}>
            Подробнее
          </Link>
        </div>
      ))}
    </>
  )
}
