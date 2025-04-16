'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Hva jeg er</h2>
          <p className="text-lg leading-relaxed">
            Jeg er en dedikert personlig trener med lidenskap for å hjelpe folk
            med å nå sine mål – både fysisk og mentalt. Gjennom skreddersydde
            planer og ærlig oppfølging, gir jeg deg verktøyene til å lykkes.
          </p>
        </div>
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/coach.jpg"
            alt="Coach portrett"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
