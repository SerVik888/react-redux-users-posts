import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Post } from '../components/post/Post'
import { useActions } from '../hooks/useActions'

export const ListOfPosts = () => {
  const { postData } = useSelector(state => state.users)
  const { fetchPosts } = useActions()
  const { userId } = useParams()

  const navigate = useNavigate()
  const goPostDescription = postId => {
    navigate(`/post/${postId}`)
  }
  console.log(userId)
  useEffect(() => {
    fetchPosts(userId)
  }, [userId])

  return (
    <>
      <h1>Список постов</h1>
      {postData.map(post => (
        <Post post={post} id={post.id} goPostDescription={goPostDescription} key={post.id} />
      ))}
    </>
  )
}
