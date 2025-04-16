'use client';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setEmail('');
      setTimeout(() => setSent(false), 2000);
    }, 2000);
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Ikony po lewej */}
        <div className="flex space-x-6 text-2xl">
          <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-pink-500 transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" aria-label="TikTok" className="text-white hover:text-pink-500 transition duration-300">
            <FaTiktok />
          </a>
        </div>

        {/* Newsletter po prawej */}
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Din e-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400
                       hover:border-pink-500 hover:placeholder-pink-400 focus:outline-none focus:border-pink-500
                       transition duration-300"
            required
          />
          <button
            type="submit"
            disabled={sending || sent}
            className={`px-4 py-2 rounded-lg text-white bg-pink-500 hover:bg-pink-600 transition 
                        duration-300 ease-in-out ${sending || sent ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {sending ? 'Sender...' : sent ? 'Takk!' : 'Meld deg på'}
          </button>
        </form>
      </div>
    </footer>
  );
}
