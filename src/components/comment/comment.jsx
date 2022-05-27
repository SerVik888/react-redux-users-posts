import React from 'react'
import s from './comment.module.css'

export const Comment = ({ comment }) => {
  return (
    <div className={s.comment_wrapper}>
      <h5 className={s.comment_title}>{comment.name}</h5>
      <p className={s.comment_email}>
        <b>{comment.email}</b>
      </p>
      <p className={s.comment_body}>{comment.body}</p>
    </div>
  )
}
