// CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';
import HamburgerMenu from '../components/common/hamburgermenu';
import './createaccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the form data to the server
      const response = await axios.post('/add-user', formData);
      console.log(response.data);
      // Handle success (e.g., notify the user, redirect, etc.)
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error(error);
    }
  };

  return (
    <>
      <HamburgerMenu />
      <div className="create-account-container">
        <button onClick={() => window.history.back()}>Back</button>
        <div className="logo">LOGO</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
    
  );
};

export default CreateAccount;
