'use client';

import Link from 'next/link';
import { FaDumbbell, FaUtensils, FaStar } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaDumbbell />,
      title: 'Online trening',
      desc: 'Skreddersydde treningsprogrammer som passer din hverdag og mål – uansett hvor du er.',
      link: '/online-trening',
      badge: 'Populær',
    },
    {
      icon: <FaUtensils />,
      title: 'Personlig kostholdsplan',
      desc: 'Kostholdsplaner laget spesielt for deg og dine preferanser – uten stress og sult.',
      link: '/kostholdsplan',
      badge: 'Anbefalt',
    },
    {
      icon: <FaStar />,
      title: 'Premium oppfølging',
      desc: 'Få tett og personlig oppfølging hver uke – med støtte, motivasjon og tilpasning.',
      link: '/premium',
      badge: 'Eksklusiv',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Hva jeg tilbyr</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="group relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.02] block"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
              {item.badge}
            </span>

            {/* Ripple Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 animate-ripple" />

            {/* Icon */}
            <div className="relative z-10 text-purple-600 text-5xl mb-4 transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(128,0,255,0.4)]">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-purple-700 transition z-10 relative">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 group-hover:text-gray-800 transition z-10 relative">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
