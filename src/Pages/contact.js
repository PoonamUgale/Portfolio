import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";

const Contact = () => {
  return (
    <div className="container">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

const ContactHeader = () => {
  const [contactHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.contactHeader);
  }, []);
  return (
    <div className="head">
      <h1>{contactHeader}</h1>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      formData.fullName &&
      formData.subject &&
      formData.email &&
      formData.message
    ) {
      console.log("Message sent!", formData);
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        message: "",
      });

      // Here, you could also send the formData to a backend service
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      {submitted && <p>Thank you! Your message has been sent.</p>}
      <form onSubmit={handleSubmit}>
        <div className="Name">
          {/* <label>Full Name:</label> */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactsubject">
          {/* <label>Subject:</label> */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
