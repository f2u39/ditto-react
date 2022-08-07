import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/Login.css';

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await login({
            username, password
        });

        if (token == null) {
            alert("Login failed!");
        } else {
            setToken(token);
        }
    }

    return (
        <form className="form-signin" onSubmit={ handleSubmit }>
            <input type="text" className="form-control" placeholder="Username" onChange = { e => setUsername(e.target.value)} />
            <input type="password" className="form-control" placeholder="Password" onChange = { e => setPassword(e.target.value)} />
            <button className="form-control btn btn-outline-light btn-lg" type="submit">Sign in</button>
        </form>
    )
}

async function login(credentials) {
    return fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return null;
        }
    })
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}