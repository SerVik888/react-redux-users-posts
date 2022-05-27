import React from 'react'
import s from './postDescription.module.css'

export const PostDescription = ({ post }) => {
  return (
    <div className={s.postWrapper}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  )
}
