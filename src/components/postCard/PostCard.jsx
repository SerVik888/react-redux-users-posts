import React from 'react'
import s from './postCard.module.css'

export const PostCard = ({ post }) => {
  return (
    <>
      <div className={s.post_wrapper}>
        <h4 className={s.post_title}>{post.title}</h4>
        <p className={s.post_body}>{post.body}</p>
      </div>
    </>
  )
}
