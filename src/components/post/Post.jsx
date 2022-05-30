import React from 'react'
import { Button } from '../UI/button/Button'
import s from './post.module.css'

export const Post = ({ post, id, goPostDescription }) => {
  return (
    <div className={s.postWrapper}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Button theme={'dark'} onClick={() => goPostDescription(id)}>
        Подробнее
      </Button>
    </div>
  )
}
