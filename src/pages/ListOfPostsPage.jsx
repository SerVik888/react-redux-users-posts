import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const ListOfPosts = () => {
  const { postData, currentUser } = useSelector(state => state.users)
  const { setCurrentPost, fetchPosts } = useActions()
  const { userId } = useParams()
  console.log(userId)
  useEffect(() => {
    // fetchPosts(user.id)
    // fetchCurrentUser(id)
    fetchPosts(userId)
  }, [userId])
  return (
    <>
      <h1>Список постов {currentUser.name}</h1>
      {postData.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`} onClick={() => setCurrentPost(post)}>
            Подробнее
          </Link>
        </div>
      ))}
    </>
  )
}
