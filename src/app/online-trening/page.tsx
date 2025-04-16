'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TreningOnlinePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Hva skjer etter at jeg har valgt en coachingplan?',
      answer: 'Du mottar tilgang til vår app og personlig kontakt for å komme i gang med treningen din umiddelbart.',
    },
    {
      question: 'Får jeg trenings- og kostholdsplan?',
      answer: 'Ja – alle planer inkluderer både treningsprogram og kostholdsplan, tilpasset dine behov.',
    },
    {
      question: 'Er dette for nybegynnere?',
      answer: 'Coaching tilpasses alle nivåer – fra helt ny til avansert.',
    },
    {
      question: 'Hvordan får jeg kontakt med coachen?',
      answer: 'Du har 24/7 chattilgang, ukentlige check-ins og mulighet for Zoom-samtaler.',
    }
  ];

  const packages = [
    {
      title: '3 mnd Coaching',
      color: 'pink',
      price: '2799',
      total: '8397',
      duration: '3 måneder',
      features: [
        'Tilrettelagt kostholdsplan',
        'Tilrettelagt treningsplan',
        'Tett oppfølging',
        'Eksklusiv app',
        '24/7 chat med coach',
        'Ukentlig check-in'
      ]
    },
    {
      title: '6 mnd Coaching',
      color: 'purple',
      price: '2399',
      total: '14394',
      duration: '6 måneder',
      badge: 'Anbefalt',
      features: [
        'Alt fra 3 mnd Coaching',
        'Flere progresjonstilpasninger',
        'Zoom-samtaler ved behov',
        'Motivasjon og evaluering hver uke'
      ]
    },
    {
      title: '8 mnd Coaching',
      color: 'pink',
      price: '2199',
      total: '17592',
      duration: '8 måneder',
      features: [
        'Alt fra 6 mnd Coaching',
        'Langsiktig planlegging',
        'Tilgang til spesialguider og bonusinnhold',
        'Personlig støtte over lengre tid'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-4 text-gray-800">
      {/* Nagłówek */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
        >
          Start reisen din med Online Coaching
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Skreddersydde trenings- og kostholdsplaner med tett oppfølging – for deg som vil oppnå ekte resultater.
        </p>
      </section>

      {/* Pakiety */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.title}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl p-6 bg-${pkg.title === '6 mnd Coaching' ? 'white' : 'gray-50'} shadow-xl border ${
              pkg.title === '6 mnd Coaching' ? 'border-2 border-purple-500 scale-105 relative' : 'border-gray-200'
            } hover:shadow-2xl transition duration-300`}
          >
            {pkg.badge && (
              <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {pkg.badge}
              </span>
            )}
            <h2 className={`text-2xl font-bold mb-3 ${pkg.color === 'purple' ? 'text-purple-600' : ''}`}>{pkg.title}</h2>
            <p className="text-gray-500 mb-5">{pkg.duration} coaching med alt du trenger for fremgang.</p>
            <ul className="text-left text-sm space-y-2 mb-5">
              {pkg.features.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  {pkg.title === '8 mnd Coaching' ? '💪' : pkg.title === '6 mnd Coaching' ? '✅' : '✔️'} {item}
                </motion.li>
              ))}
            </ul>
            <p className={`text-xl font-bold text-${pkg.color}-600 mb-1`}>{pkg.price} NOK/mnd</p>
            <p className="text-xs text-gray-400 mb-3">{pkg.duration} (total {pkg.total} NOK)</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-${pkg.color}-600 hover:bg-${pkg.color}-700 text-white w-full py-2 rounded-full transition`}
            >
              Velg {pkg.title}
            </motion.button>
          </motion.div>
        ))}
      </section>

      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 w-1/3 mx-auto mb-12 rounded-full" />

      {/* Gwarancja */}
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-inner"
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Resultatgaranti</h3>
          <p className="text-gray-600 text-sm">
            Vi tror på vår metode. Er du ikke fornøyd etter 14 dager – får du pengene tilbake.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-600">Ofte stilte spørsmål</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-sm text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-20">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Klar for å komme i gang?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          Start din coaching nå
        </motion.button>
      </section>
    </main>
  );
}
