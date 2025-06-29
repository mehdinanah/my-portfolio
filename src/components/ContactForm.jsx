import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ message: '', isSuccess: false });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus({ message: '❌ All fields are required', isSuccess: false });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ message: '❌ Please enter a valid email', isSuccess: false });
      return;
    }

    setIsSending(true);
    setStatus({ message: '', isSuccess: false });

    const serviceId = "service_ij3r4ua";
    const templateId = "template_lz0iumf";
    const publicKey = "pK1b0xPGNq2Ve4Se3";

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: 'mahdi dre3i',
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus({ message: '✅ Message sent successfully!', isSuccess: true });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setStatus({ message: '❌ Failed to send message. Please try again.', isSuccess: false });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-black">
    <div id="contact" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
      
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isSending ? 'Sending...' : (
            <>
              Send <FiSend className="ml-2" />
            </>
          )}
        </button>

        {status.message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center ${status.isSuccess ? 'text-green-600' : 'text-red-600'}`}
          >
            {status.message}
          </motion.p>
        )}
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
