import { Quote } from "lucide-react";

const reviews = [
  {
    text: "The entire process was so simple and professional. I got my Pennsylvania medical marijuana card approved within days. The doctor was knowledgeable and really took time to understand my condition.",
    name: "Sarah M.",
    location: "Philadelphia, PA",
    date: "January 2024",
  },
  {
    text: "I was nervous about the online consultation, but it was incredibly easy. The Pennsylvania MMJ doctor online was compassionate and answered all my questions. Highly recommend!",
    name: "James T.",
    location: "Pittsburgh, PA",
    date: "January 2024",
  },
  {
    text: "Best decision I made for my chronic pain management. Getting my medical marijuana card in Pennsylvania through this service was straightforward with transparent pricing and no surprises.",
    name: "Maria L.",
    location: "Allentown, PA",
    date: "December 2023",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientReviews() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border border-emerald-200 bg-emerald-50 text-emerald-600 text-xs px-4 py-1.5 rounded-full">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Your Trusted Pennsylvania <br />
            <span className="text-emerald-500">Medical Marijuana Doctor</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Licensed physicians provide personalized evaluations and guidance, helping
            patients move forward with confidence and care tailored to their needs.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {reviews.map(({ text, name, location, date }) => (
            <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <StarRating />
              <Quote className="w-6 h-6 text-emerald-400 fill-emerald-100" strokeWidth={1.5} />
              <p className="text-sm text-gray-600 leading-relaxed flex-1">"{text}"</p>
              <div>
                <p className="text-sm font-bold text-gray-900">{name}</p>
                <p className="text-xs text-gray-400">{location}</p>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}