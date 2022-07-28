import React, { useMemo, useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from './components/PostForm'
import PostFilter from './PostFilter'
import MyModal from './components/UI/myModal/MyModal'
import MyButton from './components/UI/button/MyButton'
const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'Pyton', body: 'Discription' },
    { id: 3, title: 'TypeScript', body: 'Discription' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post list 1"
      />
    </div>
  )
}

export default App
