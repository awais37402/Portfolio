import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Contact Info (Left Side) */}
        <div className={`contact-info ${isVisible ? "show" : ""}`}>
          <h2>Contact Me</h2>
          <p>Let's work together! Feel free to reach out for any project or collaboration.</p>
          <div className="info-item">
            <i className="fas fa-envelope"></i> awaistahir01234@gmail.com
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i> +92 321 3762964
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i> Rawalpindi, Pakistan
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className={`contact-form ${isVisible ? "show" : ""}`}>
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
          {submitted && <p className="success-message">Message Sent Successfully! 🎉</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
