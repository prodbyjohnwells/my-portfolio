import React from 'react';
import './ContactForm.css'; // Optional: for additional styling

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-background">
        <h2>Contact Me</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYMO-_NmUhzjoM33QDBdSZtQVhZzlmlV7bqP5b2Ss_K5FV6Q/viewform?embedded=true"
          width="8000"
          height="2000"
          title="Google Contact Form"
        >
          Loading…
        </iframe>
        </div>
    </div>
  );
};

export default ContactForm;