import React from 'react'
import s from './comment.module.css'

export const Comment = ({ comment }) => {
  return (
    <div>
      <hr />
      <h5>{comment.name}</h5>
      <p>
        <b>{comment.email}</b>
      </p>
      <p>{comment.body}</p>
    </div>
  )
}
