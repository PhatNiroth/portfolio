"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll reply soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100    from-white to-blue-50"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Let's get in touch</h2>
          <p className="text-gray-600 text-lg">
            Whether you have a question, a project, or just want to say hello – feel free to drop a
            message. I’ll try to respond within 24 hours.
          </p>

          <div className="mt-4 text-gray-700 space-y-4 text-base">
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-blue-600"></i>
              <a href="mailto:you@example.com" className="hover:underline">
                rothcontact@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-blue-600"></i>
              <a href="tel:+1234567890" className="hover:underline">
                +885 92427300
              </a>
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-blue-600"></i>
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
