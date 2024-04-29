// CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from '../components/common/hamburgermenu';
import './Login.css';
import Footer from '../components/common/Footer';


const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password_copy: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.password_copy) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.password_copy) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post('/add-user', {
        username: formData.username,
        password: formData.password
      });
      console.log(response.data);
      alert("Registration successful!");
      navigate('/login'); // Redirect user to login page after registration
      setFormData({ username: '', password: '', password_copy: '' }); // Clear the form
    } catch (error) {
      console.error(error);
      alert("Failed to register.");
    }
  };

  return (
    <div className="Login">
      <HamburgerMenu />
      <div className="welcome-message">
        <h1>Welcome to The Music Study</h1>
        <p>We want to get an idea of your music taste!</p>
      </div>
      
      <div className='login'>
        <h2>Register</h2>
        <form className='loginForm' onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder='Enter Username'
            value={formData.username}
            onChange={handleChange}
          />
          <br/>
          <input
            name="password"
            placeholder='Enter Password'
            type ='password'
            value={formData.password}
            onChange={handleChange}
          />
          <br/>
          <input
            name="password_copy"
            placeholder='Confirm Password'
            type ='password'
            value={formData.password_copy}
            onChange={handleChange}
          />
          <br/>
          <button type="submit">Register</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAccount;
