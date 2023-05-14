import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [newPost, setNewPost] = useState({
    title: '',
    body: ''
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSort = event => {
    setSortBy(event.target.value);
  };

  const handleAddPost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', body: '' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeletePost = postId => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className='post'>
      <h2>Add New Post</h2>
      <div className='container'>
      <input type="text" placeholder="Title" value={newPost.title} onChange={event => setNewPost({ ...newPost, title: event.target.value })} />
      <br/>
      <textarea placeholder="Body" value={newPost.body} onChange={event => setNewPost({ ...newPost, body: event.target.value })} />
      <button className='btn' onClick={handleAddPost}>Add Post</button>
      </div>
      </div>    
        <h2>Blogs</h2>
      <div className='container2'>
      <input type="text" className='search' placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      <button className='select' value={sortBy} onClick={handleSort}>
        Sort By Title
      </button>
        </div>
      <ul>
        {sortedPosts.map(post => (
          <li key={post.id} className='blog'>
            <h2 className='title'>{post.title}</h2>
            <p className='body'>{post.body}</p>
            <button className='dlt' onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

