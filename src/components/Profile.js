import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (isAuthenticated) {
      fetchUserProfile();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Profile</h1>
      {isAuthenticated ? (
        userProfile ? (
          <div>
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
            <p>Other profile details...</p>
            <Link to="/edit-profile">Edit Profile</Link>
          </div>
        ) : (
          <p>Loading profile...</p>
        )
      ) : (
        <p>Please <Link to="/login">login</Link> to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
