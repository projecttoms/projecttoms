'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function KostholdsplanPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Hva skjer etter at jeg har valgt en plan?',
      answer: 'Du mottar en velkomstmail og et kort skjema for å tilpasse planen etter dine behov.',
    },
    {
      question: 'Kan jeg bytte plan underveis?',
      answer: 'Ja, du kan oppgradere eller nedgradere når som helst ved å kontakte oss direkte.',
    },
    {
      question: 'Trenger jeg å bruke en app?',
      answer: 'For Premium og Ultimate får du tilgang til vår eksklusive kostholdsapp.',
    },
    {
      question: 'Er dette tilpasset allergier og preferanser?',
      answer: 'Absolutt! Vi tilpasser planene til dine matpreferanser og eventuelle allergier.',
    },
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
          Velg din kostholdsplan
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Alle planer er designet for 6 måneders samarbeid – for best mulig resultat og varige endringer.
        </p>
      </section>

      {/* Pakiety */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        {[
          {
            title: 'Basic',
            color: 'pink',
            price: '249',
            total: '1494',
            features: ['Kaloriberegning', 'En ukemeny', 'Generelle kostholdsråd'],
            badge: null,
          },
          {
            title: 'Premium',
            color: 'purple',
            price: '399',
            total: '2394',
            features: ['Alt fra Basic', 'Oppfølging hver uke', 'Tilpasset ukemeny hver måned', 'Chat-støtte og tips', 'Tilgang til kostholdsapp'],
            badge: 'Best verdi',
          },
          {
            title: 'Ultimate',
            color: 'pink',
            price: '549',
            total: '3294',
            features: ['Alt fra Premium', 'Zoom-samtale hver måned', 'Ukentlig tilpasning av plan', 'Bonusoppskrifter og guides', 'Premium tilgang til app'],
            badge: null,
          },
        ].map((pkg, idx) => (
          <motion.div
            key={pkg.title}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl p-6 bg-${pkg.title === 'Premium' ? 'white' : 'gray-50'} shadow-xl border ${
              pkg.title === 'Premium' ? 'border-2 border-purple-500 scale-105 relative' : 'border-gray-200'
            } hover:shadow-2xl transition duration-300`}
          >
            {pkg.badge && (
              <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {pkg.badge}
              </span>
            )}
            <h2 className={`text-2xl font-bold mb-3 ${pkg.color === 'purple' ? 'text-purple-600' : ''}`}>{pkg.title}</h2>
            <p className="text-gray-500 mb-5">{
              pkg.title === 'Basic' ? 'Perfekt for deg som vil starte enkelt.' :
              pkg.title === 'Premium' ? 'Mest populære valg – maks støtte og fleksibilitet.' :
              'Full pakke + personlig kontakt og justeringer.'
            }</p>
            <ul className="text-left text-sm space-y-2 mb-5">
              {pkg.features.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  {pkg.title === 'Ultimate' ? '💎' : pkg.title === 'Premium' ? '✅' : '✔️'} {item}
                </motion.li>
              ))}
            </ul>
            <p className={`text-xl font-bold text-${pkg.color}-600 mb-1`}>{pkg.price} NOK/mnd</p>
            <p className="text-xs text-gray-400 mb-3">6 mnd samarbeid (total {pkg.total} NOK)</p>
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

      {/* Gradient separator */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 w-1/3 mx-auto mb-12 rounded-full" />

      {/* Gwarancja */}
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-inner"
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">100% Fornøydgaranti</h3>
          <p className="text-gray-600 text-sm">
            Vi tror på kvalitet. Hvis du ikke er fornøyd innen de første 14 dagene, får du pengene tilbake. Uten spørsmål.
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
          Klar for å starte reisen din?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          Velg en plan nå
        </motion.button>
      </section>
    </main>
  );
}
