import React, { useState } from 'react';
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; 
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css'; 
import axios from 'axios';

function LoginPage() {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        if (!username || !password) {
            setError('Username and password are required.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:3001/submit-login', { username, password });
            if (res.data.token) {
                login(res.data.user);
                console.log(res.data);
                navigate('/');
            } else {    
                setError('Invalid username or password.');
            }
        } catch (error) {
            console.log('Login error:', error);
            setError('Failed to login. Please try again later.');
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
                <h2>Login</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input 
                        name="username" 
                        placeholder='Enter Username' 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br/>
                    <input 
                        name="password" 
                        placeholder='Enter Password' 
                        type='password'
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br/>
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
            
            <div className='register'>
                <p><Link to="/create-account">Create New Account</Link></p>
            </div>

            <Footer />
        </div>
    );
}

export default LoginPage;