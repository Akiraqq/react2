import React from 'react'
import cl from './UI/button/MyButton.module.css'
const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button className={cl.myBtn} onClick={() => props.remove(props.post)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PostItem
