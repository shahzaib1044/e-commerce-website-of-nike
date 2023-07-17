import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!name || !address || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      console.log('Submitting registration:', name, email, password, address);

      const response = await fetch('https://e-commerce-website-of-nike-api.vercel.app//Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          address,
        }),
      });

      console.log('Registered submitted successfully:', response);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setAddress('');

      // Add code to handle success or navigate to a different page if needed
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle error
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChangeName}
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
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={handleChangeAddress}
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
          Signup
        </button>
      </form>
      <p
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          color: '#555',
        }}
      >
        Already have an account? <a href="/Signin">Signin</a>
      </p>
    </div>
  );
};

export default Signup;
