import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Post } from '../components/post/Post'
import { Title } from '../components/UI/title/Title'
import { useActions } from '../hooks/useActions'

export const ListOfPosts = () => {
  const { postData } = useSelector(state => state.users)
  const { fetchPosts } = useActions()
  const { userId } = useParams()

  const navigate = useNavigate()
  const goPostDescription = postId => {
    navigate(`/post/${postId}`)
  }

  useEffect(() => {
    fetchPosts(userId)
  }, [userId])

  return (
    <>
      <Title>Список постов</Title>
      {postData.map(post => (
        <Post post={post} id={post.id} goPostDescription={goPostDescription} key={post.id} />
      ))}
    </>
  )
}
