import React, { useState } from "react";
import axios from "axios";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-email-api-endpoint", {
        name,
        email,
        message,
      });
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formContainerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
  };

  const buttonStyle = {
    padding: "0.75rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
  };

  const locationStyle = {
    marginTop: "2rem",
   
    textAlign: "center",
    color: "#555",
  };

  return (
    <div style={formContainerStyle}>
      <h2>Contact Us</h2>
      {sent ? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
            style={inputStyle}
            rows="5"
            required
          />
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      )}
      <div style={locationStyle}>
        <h3>Store Location and Timings</h3>
        <p>123 Street, City, Country</p>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contactus;
