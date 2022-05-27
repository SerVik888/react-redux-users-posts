import React from 'react'
import s from './post.module.css'

export const Post = ({ post, id, goPostDescription }) => {
  return (
    <div className={s.postWrapper}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button className={s.btn} onClick={() => goPostDescription(id)}>
        Подробнее
      </button>
    </div>
  )
}
