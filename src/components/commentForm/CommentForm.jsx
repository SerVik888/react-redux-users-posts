import React from 'react'
import { useInput } from '../../hooks/useInput'
import s from './commentForm.module.css'

export const CommentForm = ({ postComment, setActiveModal, postId }) => {
  const email = useInput('', { isEmpty: '', minLength: 10, maxLength: 20, isEmail: '' })
  const comment = useInput('', { isEmpty: '', minLength: 10, maxLength: 100 })

  const handleSubmit = e => {
    e.preventDefault()
    postComment({ id: Date.now().toString(), postId, email: email.value, body: comment.value })
    email.setValue('')
    comment.setValue('')
    setActiveModal(false)
  }

  return (
    <div>
      <h1 className={s.h1}>Комментарий</h1>
      <form className={s.commentForm} onSubmit={handleSubmit}>
        {email.isDirty && email.error && <div className={s.error}>{email.error}</div>}
        <input
          className={s.input}
          placeholder={'имейл'}
          onBlur={email.onBlur}
          onChange={email.onChange}
          value={email.value}
          type='email'
        />
        {comment.isDirty && comment.error && <div className={s.error}>{comment.error}</div>}
        <textarea
          className={s.input}
          placeholder='комментарий'
          onBlur={comment.onBlur}
          onChange={comment.onChange}
          value={comment.value}
          type='text'
        />
        <button className={s.btn} disabled={!email.inputValid || !comment.inputValid} type='submit'>
          Оставить комментарий
        </button>
      </form>
    </div>
  )
}
