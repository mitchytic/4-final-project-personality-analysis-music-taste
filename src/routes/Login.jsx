import React, { useState } from 'react';
import HamburgerMenu from '../components/common/hamburgermenu';
import { Link } from 'react-router-dom';

function LoginPage () {
    return (
        <>
        <HamburgerMenu />
            <head>
                <title>Login</title>
            </head>
            <body>
                <form action="/submit-login" method="post">
                    <div>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required></input>
                    </div>
                    <div>
                        <label for="password">Username:</label>
                        <input type="text" id="password" name="password" required></input>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </body>
            <Link to="/create-account">Create Account</Link>
        </>
    )
}

export default LoginPage;