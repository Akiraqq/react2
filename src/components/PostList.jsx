import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((posts, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={posts}
          key={posts.id}
        />
      ))}
    </div>
  )
}

export default PostList
