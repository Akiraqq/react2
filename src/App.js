import React, { useState } from 'react';
import MyInput from './components/UI/input/MyInput';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'Pyton', body: 'Discription' },
    { id: 3, title: 'TypeScript', body: 'Discription' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <form onSubmit={addNewPost}>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Post discription"
        />
        <MyButton type="submit">Create post</MyButton>
      </form>
      <PostList posts={posts} title="Post list 1" />
    </div>
  );
};

export default App;
