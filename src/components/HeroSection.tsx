'use client';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 bg-black pt-20">
      <img
        src="/hero.jpg"
        alt="Hero bakgrunn"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 max-w-3xl text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tren smartere. Spis bedre. Lev sterkere.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Din digitale coach for en ny livsstil – bygget på struktur, mestring og ekte resultater.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Start i dag
        </button>
      </div>
    </section>
  );
}
