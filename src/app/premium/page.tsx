// Uwaga: zaktualizowany kod z sekcjami 💎, 🎁, binding info i animowanym licznikiem
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PremiumPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [spotsLeft, setSpotsLeft] = useState<number>(Math.floor(Math.random() * 4) + 3);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: 'Hva gjør Premium Coaching annerledes?',
      answer: 'Du får tett og personlig oppfølging, tilgang til eksklusive ressurser og mulighet for fysisk trening sammen med coach.'
    },
    {
      question: 'Hva inkluderer oppfølgingen?',
      answer: 'Ukentlige tilpasninger, Zoom-samtaler og tilgang til alt bonusinnhold i ProjectToms-universet.'
    },
    {
      question: 'Hvordan fungerer betalingen?',
      answer: 'Du betaler kun 3 750 NOK/mnd i 12 måneder – dette er et eksklusivt tilbud med bindingstid.'
    },
    {
      question: 'Er dette for nybegynnere?',
      answer: 'Premium passer både for nybegynnere og viderekomne som ønsker maks fremgang og personlig oppfølging.'
    }
  ];

  const features = [
    'Tilrettelagt kostholds- og treningsplan',
    'Ukentlig oppfølging og tilpasninger',
    'Zoom-samtale annenhver uke',
    'Analyse av kroppssammensetning (InBody e.l.)',
    'Fysisk trening med coach under ProjectToms-oppkjøring',
    '24/7 chat og personlig støtte',
    'Tilgang til ProjectToms-ressurser og app',
    'Eksklusivt bonusinnhold'
  ];

  const bonuses = [
    'Gratis tilgang til treningsapp (verdi 1 499 NOK)',
    'Kroppsanalyse og rapport (verdi 2 000 NOK)',
    'Personlig oppmøte (verdi 3 000 NOK)'
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-4 text-gray-800">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
        >
          Premium Coaching for deg som vil ha det beste
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Ett eksklusivt coachingprogram for deg som ønsker maksimal støtte, fysisk oppfølging og resultater i verdensklasse.
        </p>
      </section>

      {/* Pasek zaufania + licznik */}
      <div className="text-center text-sm text-gray-500 mb-10">
        <span className="inline-block mx-2">+50 fornøyde kunder</span>
        <span className="inline-block mx-2">| Sertifisert trener</span>
        <span className="inline-block mx-2">| 100% diskresjon</span>
        <motion.span 
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mx-2 text-pink-500 font-semibold"
        >
          {spotsLeft} plasser igjen
        </motion.span>
      </div>

      {/* Sekcja główna */}
      <section className="max-w-4xl mx-auto mb-20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl p-8 bg-white shadow-xl border-2 border-purple-500 relative hover:shadow-2xl transition duration-300"
        >
          <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
            Begrenset antall plasser
          </span>

          <h2 className="text-3xl font-bold text-purple-600 mb-4">ProjectToms Premium Coaching</h2>

          {/* Co zawiera pakiet */}
          <ul className="text-left text-sm space-y-3 mb-6">
            {features.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                💎 {item}
              </motion.li>
            ))}
          </ul>

          {/* Bonusy */}
          <ul className="text-left text-sm space-y-3 mb-6">
            {bonuses.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                🎁 {item}
              </motion.li>
            ))}
          </ul>

          <div className="border border-gray-200 rounded-lg p-6 text-center bg-gray-50 shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-1">Kun 3 750 NOK/mnd</h3>
            <p className="text-purple-600 font-bold text-xl">12 måneders coaching</p>
            <p className="text-xs text-gray-500 mt-1">Bindingstid: 12 måneder</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-full font-semibold transition"
          >
            Start Premium Coaching
          </motion.button>
        </motion.div>
      </section>

      {/* Slik fungerer det */}
      <section className="max-w-3xl mx-auto text-center mb-20">
        <h3 className="text-2xl font-bold text-purple-600 mb-6">Slik fungerer det</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-gray-50 p-4 rounded-lg shadow">1. Velg plan</div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">2. Fyll ut skjema</div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">3. Start coaching</div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="text-center max-w-xl mx-auto mb-20">
        <blockquote className="text-lg italic text-gray-600">
          “Dette forandret livet mitt. Jeg fikk endelig struktur og resultatene kom raskt.”
        </blockquote>
        <p className="mt-2 text-sm font-semibold text-purple-600">– Maria L., Premium Coaching</p>
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
                  animate={{ height: 'auto', opacity: 1 }}
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
          Klar for neste nivå?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          Bli Premium nå
        </motion.button>
      </section>
    </main>
  );
}
