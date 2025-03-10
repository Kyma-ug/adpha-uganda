import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import SendIcon from "./send.svg";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://your-backend-url.com';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit the form');
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5 seconds
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2>Have a question?</h2>
      <p>Leave your question here.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          aria-label="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
          <img src={SendIcon} alt="" aria-hidden="true" />
        </button>
      </form>

      {/* Green Notification Div */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="success-notification-contact"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Your message has been sent!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && <p className="error-message-contact">{error}</p>}
    </motion.div>
  );
};

export default ContactForm;