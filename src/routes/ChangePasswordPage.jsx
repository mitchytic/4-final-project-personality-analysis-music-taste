import './ChangePasswordPage.css';
import React, { useState } from 'react';
import HamburgerMenu from "../components/common/hamburgermenu";
import Footer from '../components/common/Footer'; ;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Placeholder for password change logic
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    // Typically you would send this data to a backend server for processing
    alert('Password changed successfully!'); // Placeholder for successful operation
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
