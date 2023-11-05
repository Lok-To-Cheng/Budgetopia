import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
            <p><label for="email">E-mail </label>
            <input 
                value={email} 
                type="email" 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)} /></p>
            <p><label for="password">Password </label>
            <input 
                value={password} 
                type="password" 
                id="password" 
                name="password"
                onChange={(e) => setPW(e.target.value)} /></p>
            <button type="submit">Login</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
        </div>
    )
}