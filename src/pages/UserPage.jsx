import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PostCard } from '../components/postCard/PostCard'
import { Button } from '../components/UI/button/Button'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { UserDescription } from '../components/userDescription/UserDescription.jsx'
import { useActions } from '../hooks/useActions'

export const UserPage = () => {
  const { fetchPosts, fetchCurrentUser } = useActions()
  const { postData, currentUser } = useSelector(state => state.users)
  const { id } = useParams()

  useEffect(() => {
    fetchCurrentUser(id)
    fetchPosts(id)
  }, [id])

  const navigate = useNavigate()
  const goPostPage = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <div>
      <UserDescription user={currentUser} />
      <FlexContainer>
        {postData.slice(0, 3).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </FlexContainer>
      <Button theme={'white'} onClick={goPostPage}>
        больше постов
      </Button>
    </div>
  )
}
