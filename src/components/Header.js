import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
  const { logout } = useAuth();

  return (
    <header>
      <h1>My Social Media App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
