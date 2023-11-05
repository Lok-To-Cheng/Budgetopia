import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
            <p><label>Full name </label>
            <input 
                value={name} 
                id="name" 
                name="name" 
                onChange={(e) => setName(e.target.value)} /></p>
            <p><label htmlFor="email">E-mail </label>
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
            <button type="submit">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log in!</button>
        </div>
    )
}