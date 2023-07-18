import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedInUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Signin successful
        const firstLetter = email.charAt(0).toUpperCase();
        setLoggedInUser(firstLetter);
        navigate('/Products');
      } else {
        // Signin failed
        const error = await response.json();
        alert('Email or Password is incorrect');
        console.log(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '0.5rem',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px',
        margin: '50px auto',
      }}
    >
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.65rem',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.65rem',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: '#e50914',
            color: 'white',
            border: 'none',
            borderRadius: '0.65rem',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      </form>
      <p
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          color: '#555',
        }}
      >
        <a href="/Signup">Don't have an account? Sign up</a>
      </p>
    </div>
  );
};

export default Signin;
