'use client';

import Link from 'next/link';

export default function OfferSection() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
        Utforsk våre tilbud
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Online Trening */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Online Trening</h3>
          <p className="text-gray-700 mb-4">
            Få personlig tilpasset treningsprogram rett på mobilen. Tren hvor du vil, når du vil.
          </p>
          <Link href="/online-trening">
            <span className="text-pink-500 hover:underline font-semibold">Les mer →</span>
          </Link>
        </div>

        {/* Kostholdsplan */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Kostholdsplan</h3>
          <p className="text-gray-700 mb-4">
            Balanserte måltidsplaner tilpasset dine mål og din livsstil – uten dietter og stress.
          </p>
          <Link href="/kostholdsplan">
            <span className="text-pink-500 hover:underline font-semibold">Les mer →</span>
          </Link>
        </div>

        {/* Premium Coaching */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium Coaching</h3>
          <p className="text-gray-700 mb-4">
            Ukentlig oppfølging, justeringer og tett samarbeid for maksimal fremgang.
          </p>
          <Link href="/premium">
            <span className="text-pink-500 hover:underline font-semibold">Les mer →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
