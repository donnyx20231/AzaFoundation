// app/contact/page.tsx
'use client';

import { useState } from 'react';
import SectionTitle from '../components/SectionTitle'; // reuse from earlier

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });

      const json = await res.json();
      if (res.ok) {
        setStatus('Thank you! Your message has been sent.');
        form.reset();
      } else {
        setStatus(json.message || 'Something went wrong.');
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Contact Us" subtitle="We'd love to hear from you" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
            <div className="space-y-6 text-gray-700">
              <p><strong>Address:</strong> No. 7 Ikot Uduak, Off MCC, Calabar, Cross River State, Nigeria.</p>
              <p><strong>Email:</strong> azariahllcf@gmail.com</p>
              <p><strong>Phone:</strong> +234 803 226 9519<br />+234 814 000 1359</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" /> {/* ← get free key at web3forms.com */}

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-semibold transition w-full md:w-auto"
            >
              Send Message
            </button>

            {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}