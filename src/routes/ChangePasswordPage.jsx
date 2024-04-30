import './ChangePasswordPage.css';
import React, { useState } from 'react';
import HamburgerMenu from "../components/common/hamburgermenu";
import Footer from '../components/common/Footer';
import axios from 'axios';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No authentication token found. Please log in again.');
      return;
    }
    
    const user = localStorage.getItem('user');

    try {
      const response = await axios.post('/api/change-password', {
        oldPassword,
        newPassword,
        user
      }, {
        headers: {
          'Authorization': `Bearer ${token}`  // Include the token in the Authorization header
        }
      });
      
      if (response.status === 200) {
        alert('Password changed successfully!');
      } else {
        alert('Password change failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle errors (e.g., show message to the user)
      alert('An error occurred, please try again.');
    }
  };

  return (
  <div className="change-password-page">
    <HamburgerMenu />
    <div className="welcome-message">
      <h1>Welcome to The Music Study</h1>
      <p>We want to get an idea of your music taste!</p>
    </div>
    
    <div className='change-form'>
      <h2>Change Password</h2>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input type="password" placeholder="Enter Old Password" value={oldPassword} onChange={handleOldPasswordChange} />
        <input type="password" placeholder="Enter New Password" value={newPassword} onChange={handleNewPasswordChange} />
        <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer />
  </div>  
  );
};

export default ChangePasswordPage;
