import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    setIsSubmitted(true); // Set message as submitted

    // Reset form after submission (optional)
    e.target.reset();

    // You can also handle actual form submission here (e.g., an API call)
  };

  return (
    <section className="contact">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-intro">I’d love to hear from you! Whether you have a project, a question, or just want to say hi, feel free to reach out.</p>

      {isSubmitted && (
        <div className="success-message">
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
