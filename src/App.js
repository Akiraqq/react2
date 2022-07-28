import React, { useEffect, useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from './components/PostForm'
import PostFilter from './PostFilter'
import MyModal from './components/UI/myModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import axios from 'axios'
const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const fetchPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    setPosts(response.data)
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
