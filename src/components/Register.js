import React, { useState } from 'react';
import { handleRegister } from '../services/api'; // Import the function

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = async (e) => {
        await handleRegister(e, username, password);
        // Here you can add additional logic, like showing a message to the user
    };

    return (
        <form onSubmit={onRegister}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

