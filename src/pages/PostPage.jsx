import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CommentForm } from '../components/commentForm/CommentForm'
import { Modal } from '../components/modal/Modal'
import { useActions } from '../hooks/useActions'

export const PostPage = () => {
  const [activeModal, setActiveModal] = useState(false)
  const { currentPost, currentUser, comments } = useSelector(state => state.users)
  const { fetchComments, postComment } = useActions()
  // console.log(comments)
  useEffect(() => {
    fetchComments(currentPost.id)
    // fetchComments(currentPost.id)
  }, [setActiveModal])

  return (
    <>
      <h1>Пост пользователя {currentUser.name}</h1>
      <h4>{currentPost.title}</h4>
      <p>{currentPost.body}</p>
      {comments.map(comment => (
        <div key={comment.id}>
          <hr />
          <h5>{comment.name}</h5>
          <p>
            <b>{comment.email}</b>
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
      <button onClick={() => setActiveModal(true)}>Оставить комментарий</button>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <CommentForm postComment={postComment} setActiveModal={setActiveModal} postId={currentPost.id} />
      </Modal>
    </>
  )
}
