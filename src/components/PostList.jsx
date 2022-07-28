import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'
const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((posts, index) => (
          <CSSTransition key={posts.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={posts} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList
