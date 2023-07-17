import React, { useState } from "react";
import axios from "axios";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting registration:', name, email, message);

      const response = await axios.post('http://localhost:3001/Contactus', {
        name,
        email,
        message,
      });

      console.log('Registered submitted successfully:', response);

      setSent(true);
      setName('');
      setEmail('');
      setMessage('');

      // Add code to handle success or navigate to a different page if needed
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle error
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

  return (
    <div
      style={{
        maxWidth: "50vh",
        margin: "0 auto",
      }}
    >
      <h2>Contact Us</h2>
      {sent ? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            rows="5"
            required
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      )}
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#555",
        }}
      >
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
