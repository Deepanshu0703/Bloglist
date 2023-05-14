import React, { useState } from 'react';

const AddPostForm = ({ handleAddPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      return;
    }
    handleAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
