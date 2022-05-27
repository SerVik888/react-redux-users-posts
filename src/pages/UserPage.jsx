import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PostCard } from '../components/postCard/PostCard'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { UserDescription } from '../components/userDescription/UserDescription'
import { useActions } from '../hooks/useActions'

export const UserPage = ({ user }) => {
  const { fetchPosts, fetchCurrentUser } = useActions()
  const { postData } = useSelector(state => state.users)
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
      <UserDescription user={user} />
      <FlexContainer>
        {postData.slice(0, 3).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </FlexContainer>
      <button onClick={goPostPage}>больше постов</button>
    </div>
  )
}
