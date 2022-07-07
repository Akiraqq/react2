import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'Pyton', body: 'Discription' },
    { id: 3, title: 'TypeScript', body: 'Discription' },
  ]);

 const createPost = (newPost) => {
   setPosts([...posts, newPost])
 };
 
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
     <PostForm create={createPost} />
     {posts.length 
      ? <PostList remove = {removePost} posts={posts} title="Post list 1" />
      : <h1 style={{textAlign: 'center'}} >Posts not found</h1>
      }
    </div>
  );
};

export default App;
