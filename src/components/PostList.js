import React from 'react';
import Post from './Post';

const PostList = ({ posts, handleDeletePost }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} handleDeletePost={handleDeletePost} />
      ))}
    </div>
  );
};

export default PostList;
