import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes, FaEnvelope } from "react-icons/fa";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== value);
    }
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://adpha-newsletter-backend.onrender.com";
      
      // Step 1: Push data to MongoDB
      const response = await fetch(`${backendUrl}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Subscription failed");
      }
  
      // Step 2: Send a welcome email using Resend
      const emailResponse = await fetch(`${backendUrl}/api/send-welcome-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
        }),
      });
  
      if (!emailResponse.ok) {
        throw new Error("Failed to send welcome email");
      }
  
      // Clear the form and show success message
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        interests: [],
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <button onClick={toggleDrawer} className="newsletter-btn">
        <FaEnvelope size={20} />
        Sign Up
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="newsletter-backdrop"
            onClick={toggleDrawer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="newsletter-drawer"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="newsletter-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <button onClick={toggleDrawer} className="close-btn">
                  <FaTimes size={24} />
                </button>
                <img
                  src="/images/adpha-logo.svg"
                  alt="ADPHA Logo"
                  className="newsletter-logo"
                />
              </motion.div>

              <motion.h2
                className="newsletter-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Sign Up for Our Newsletter
              </motion.h2>
              <motion.p
                className="newsletter-description"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Stay updated with our latest news, events, and health initiatives.
              </motion.p>

              <motion.form
                className="newsletter-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onSubmit={handleSubmit}
              >
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input-field"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={true}
                  />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input-field"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required={true}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleInputChange}
                  required={true}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Where do you live?"
                  className="input-field"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <div className="checkbox-group">
                  <p className="checkbox-title">Topics you're interested in:</p>
                  <label>
                    <input
                      type="checkbox"
                      value="Disability Rights"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Disability Rights
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="HIV/AIDS Awareness"
                      onChange={handleCheckboxChange}
                    />{" "}
                    HIV/AIDS Awareness
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="TB Awareness"
                      onChange={handleCheckboxChange}
                    />{" "}
                    TB Awareness
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Health Initiatives"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Health Initiatives
                  </label>
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      className="success-notification"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      Thank you for subscribing!
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      className="error-notification"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Subscribe"}
                </button>

                <p className="terms">
                  By signing up, you accept our <Link to="/terms">Terms & Policies</Link>.
                </p>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsLetter;