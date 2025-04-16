'use client';

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Hva sier kundene?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {[
          {
            text: "Følte meg endelig sett og forstått. Treningen ble en vane, ikke en byrde.",
            author: "– Maria L.",
          },
          {
            text: "Dietten passet faktisk livet mitt. Jeg spiste bedre uten å føle press.",
            author: "– Jonas K.",
          },
          {
            text: "Premium-oppfølgingen var gull verdt. Motivasjon hver uke!",
            author: "– Silje N.",
          },
        ].map((review, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="mb-4 text-gray-700 italic">“{review.text}”</p>
            <span className="font-semibold text-pink-500">{review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
