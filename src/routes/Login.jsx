import React, { useState } from 'react';
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; 
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';

function LoginPage () {
    const navigate = useNavigate(); 
    const [wrongLogin, setWrongLogin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        console.log(username,password);
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then( res => {
            console.log(res.data.loggedIn);
                if(res.data.loggedIn){
                    navigate('/home')
                    localStorage.setItem('token', res.data.token)
                }
                else{
                    setWrongLogin(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
    <div className="Login">
        <HamburgerMenu />
            <div className="welcome-message">
                <h1>Welcome to The Music Study</h1>
                <p>We want to get an idea of your music taste!</p>
            </div>
            
            <div className='login'>
                <h2>Login</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name="username" placeholder='Enter Username' />
                    <br/>
                    <input name="password" placeholder='Enter Password' type ='password'/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
            
            <div className='register'>
                <p><Link to="/create-account">Create New Account</Link></p>
            </div>

        <Footer />
    </div>
    )
}

export default LoginPage;