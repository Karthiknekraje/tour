import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us:</p>
      <ul>
        <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
        <li>Phone: 555-555-5555</li>
        <li>Address: 123 Main St, Anytown, USA</li>
      </ul>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Message:</label>
        <textarea />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;