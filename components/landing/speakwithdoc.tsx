import { Calendar, Monitor, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Calendar, title: "Same-Day Appointments Available", desc: "Get started immediately with our flexible scheduling" },
  { icon: Monitor,  title: "100% Online Process",             desc: "No in-person visits required"                        },
  { icon: Shield,   title: "Licensed PA Physicians",          desc: "Certified medical marijuana doctors"                 },
];

export default function SpeakWithDoctor() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-emerald-100 py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* ── LEFT: Content ── */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Speak with your <br />
            Doctor <span className="text-emerald-500">Today</span>
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Complete a secure online consultation and receive professional guidance from the
            comfort of your home.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-4 bg-[#1a3a35] rounded-xl px-4 py-3"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-emerald-400" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">{title}</p>
                  <p className="text-xs text-white/45 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 w-fit bg-[#1a3a35] hover:bg-[#224a44] text-white text-sm font-semibold px-6 py-3 rounded-full transition">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── RIGHT: Doctor image ── */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            {/*
              Replace with your actual doctor image:
              <Image src="/images/doctor.jpg" alt="Doctor" fill className="object-cover" />
            */}
            <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center opacity-60">
              <svg className="w-20 h-20 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}