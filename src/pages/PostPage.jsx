import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Comment } from '../components/comment/Comment'
import { CommentForm } from '../components/commentForm/CommentForm'
import { PostDescription } from '../components/postDescription/PostDescription'
import { FlexContainer } from '../components/UI/flexContainer/FlexContainer'
import { Modal } from '../components/UI/modal/Modal'
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
      <h1>Пост</h1>
      <PostDescription post={currentPost} />
      <hr />
      <h2>комментарии</h2>
      <FlexContainer>
        {comments.map(comment => (
          <div key={comment.id}>
            <Comment comment={comment} />
          </div>
        ))}
      </FlexContainer>
      <button onClick={() => setActiveModal(true)}>Оставить комментарий</button>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <CommentForm postComment={postComment} setActiveModal={setActiveModal} postId={currentPost.id} />
      </Modal>
    </>
  )
}
