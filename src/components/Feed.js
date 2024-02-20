import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated } = useAuth(); // Example usage of useAuth hook

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Example endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            {isAuthenticated && <Link to={`/post/${post.id}`}>View Details</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
