import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

export const ListOfPosts = () => {
  const { postData } = useSelector(state => state.users)
  const { fetchPosts } = useActions()
  const { userId } = useParams()
  console.log(userId)
  useEffect(() => {
    // fetchPosts(user.id)
    // fetchCurrentUser(id)
    fetchPosts(userId)
  }, [userId])
  return (
    <>
      <h1>Список постов</h1>
      {postData.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          {/* <Link to={`/post/${post.id}`} onClick={() => setCurrentPost(post)}> */}
          <Link to={`/post/${post.id}`}>Подробнее</Link>
        </div>
      ))}
    </>
  )
}
