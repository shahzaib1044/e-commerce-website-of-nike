import React, { useState } from "react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    console.log("Sign in:", email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "0.5rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    // margin: "0 auto",
    marginTop:'50px',
    marginLeft:'40%',
    marginBottom:'50px',
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.65rem",
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#e50914",
    color: "white",
    border: "none",
    borderRadius: "0.65rem",
    cursor: "pointer",
  };

  const signUpLinkStyle = {
    marginTop: "1rem",
    textAlign: "center",
    color: "#555",
  };

  return (
    <div style={formContainerStyle}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          style={inputStyle}
        />
        <button type="submit" style={submitButtonStyle}>
          Sign In
        </button>
      </form>
      <p style={signUpLinkStyle}>
      <a href="/Signup">
        Don't have an account? Sign up</a>
      </p>
    </div>
  );
};

export default Signin;
