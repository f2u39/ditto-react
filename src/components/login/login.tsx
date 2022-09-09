import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./login.css";

export default function Login(setUserToken: React.Dispatch<React.SetStateAction<string>>) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userToken = await login({
            username, password
        });

        if (userToken == null) {
            alert("(ノ｀Д)ノ おまえだれやん!");
        } else {
            alert("おかえりなさいませ (●'◡'●)!");
            setUserToken(userToken);
        }
    }

    return (
        <div className="signin">
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={ e => setUsername(e.target.value) }
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    onChange = { e => setPassword(e.target.value) } 
                />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

async function login(credentials: { username: string; password: string; }) {
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
    setUserToken: PropTypes.func.isRequired
}