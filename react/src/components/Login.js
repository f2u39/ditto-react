import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await login({
            username, password
        });
        console.log(token);
        setToken(token);
    }

    return (
        <div className="login">
            <form onSubmit={ handleSubmit }>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" onChange= { e => setUsername(e.target.value)} />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" onChange = { e => setPassword(e.target.value)} />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

async function login(credentials) {
    return fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}