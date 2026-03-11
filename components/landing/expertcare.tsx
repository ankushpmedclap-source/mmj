// ExpertCareSection.jsx
// Drop this into your Next.js project (app or pages directory).
// Requires: Tailwind CSS, next/image (or swap for <img> if preferred).

import Image from "next/image";

export default function ExpertCareSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 min-w-0">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-5 border border-teal-100">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
            Expert Care
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Expert Care from{" "}
            <span className="text-teal-500">
              Licensed Pennsylvania
              <br />
              Medical Professionals
            </span>
          </h2>

          {/* Body copy */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Our network of experienced physicians specializes in medical cannabis
            evaluations, ensuring every patient receives personalized attention and
            comprehensive guidance throughout the application process. Each doctor
            is fully licensed in Pennsylvania and stays current with the latest state
            regulations.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We understand that seeking medical cannabis treatment is a significant
            decision. That's why our doctors take the time to thoroughly review your
            medical history, answer all your questions, and provide clear
            recommendations based on your individual health needs and qualifying
            conditions.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Board Certified" },
              { label: "HIPAA Compliant" },
              { label: "100% Legal" },
            ].map(({ label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200"
              >
                {/* small checkmark circle */}
                <svg
                  className="w-3.5 h-3.5 text-teal-500 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
                  <path
                    d="M5 8.5l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image card ── */}
        <div className="flex-1 min-w-0 flex justify-center lg:justify-end relative">
          {/* Decorative teal background blob */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-teal-50 rounded-3xl -z-10" />

          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            {/*
              Replace the src below with your actual image path, e.g.:
              src="/images/doctor-consultation.jpg"
              Using a placeholder gradient here for demo purposes.
            */}
            <div className="w-full h-full bg-gradient-to-br from-teal-100 via-slate-200 to-slate-300 flex items-center justify-center">
              {/* Placeholder illustration */}
              <svg
                className="w-24 h-24 text-teal-300 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
                <circle cx="12" cy="12" r="9" strokeWidth={1} />
              </svg>
              {/* If using next/image, uncomment below and remove the div above:
              <Image
                src="/images/doctor-consultation.jpg"
                alt="Doctor consulting with patient"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Floating accent card */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800 leading-none">State Licensed</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Pennsylvania Certified</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}