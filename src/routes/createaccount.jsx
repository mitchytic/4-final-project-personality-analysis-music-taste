// CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';
import HamburgerMenu from '../components/common/hamburgermenu';
import './Login.css';
import Footer from '../components/common/Footer'; 
import { useNavigate, Link } from 'react-router-dom';


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
    <div className="Login">
        <HamburgerMenu />
            <div className="welcome-message">
                <h1>Welcome to The Music Study</h1>
                <p>We want to get an idea of your music taste!</p>
            </div>
            
            <div className='login'>
                <h2>Register</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name="username" placeholder='Enter Username' />
                    <br/>
                    <input name="password" placeholder='Enter Password' type ='password'/>
                    <br/>
                    <input name="password_copy" placeholder='Confirm Password' type ='password' />
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>

        <Footer />
    </div>
    
  );
};

export default CreateAccount;
