import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Comment } from '../components/comment/Comment'
import { CommentForm } from '../components/commentForm/CommentForm'
import { PostDescription } from '../components/postDescription/PostDescription'
import { Button } from '../components/UI/button/Button'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { Modal } from '../components/UI/modal/Modal'
import { Title } from '../components/UI/title/Title'
import { useActions } from '../hooks/useActions'

export const PostPage = () => {
  const [activeModal, setActiveModal] = useState(false)
  const { currentPost, comments } = useSelector(state => state.users)
  const { fetchCurrentPost, fetchComments, postComment } = useActions()
  const { id } = useParams()

  useEffect(() => {
    fetchComments(id)
    fetchCurrentPost(id)
  }, [id])

  return (
    <>
      <Title>Пост</Title>
      <PostDescription post={currentPost} />
      <hr />
      <h2>комментарии</h2>
      <FlexContainer>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </FlexContainer>
      <Button theme={'white'} onClick={() => setActiveModal(true)}>
        Оставить комментарий
      </Button>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <CommentForm postComment={postComment} setActiveModal={setActiveModal} postId={currentPost.id} />
      </Modal>
    </>
  )
}
