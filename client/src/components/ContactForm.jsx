import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgvypoln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSubmitted(false), 4000); // hide after 4s
      } else {
        alert("There was a problem submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-10">
        We'd love to hear from you. Whether it's a custom request or a kind word, drop us a message.
      </p>

      {submitted && (
        <div className="mb-6 text-green-600 font-semibold">
          Message sent! We'll get back to you soon. 💌
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 text-left">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
