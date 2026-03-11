import { CheckCircle2 } from "lucide-react";

const conditions = [
  "Chronic Pain",
  "Anxiety Disorders",
  "Post-Traumatic Stress Disorder (PTSD)",
  "Cancer",
  "Epilepsy",
  "Inflammatory Bowel Disease",
  "Multiple Sclerosis",
  "Parkinson's Disease",
  "Neuropathy",
  "Crohn's Disease",
  "Glaucoma",
  "HIV/AIDS",
];

export default function QualifyingConditions() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center leading-tight">
          Conditions That Qualify for a <br />
          Medical Marijuana Card in{" "}
          <span className="text-emerald-500">Pennsylvania</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm text-center max-w-md leading-relaxed">
          Qualifying conditions are reviewed by experienced doctors, ensuring patients
          receive accurate guidance with MMJ Doctor Pennsylvania.
        </p>

        {/* Conditions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-2">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-white hover:shadow-sm transition"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" strokeWidth={2} />
              <span className="text-sm font-medium text-gray-700">{condition}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}