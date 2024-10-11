// RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                mode: 'no-cors'
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful Register (e.g., save token, redirect)
                console.log('Register successful:', data);
            } else {
                console.error('Register failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during Register:', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
