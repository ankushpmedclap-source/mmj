import { Leaf, Heart, Users, Shield } from "lucide-react";

const benefits = [
  { icon: Leaf,   title: "Natural Relief",           desc: "Access natural treatment options for managing chronic conditions"                          },
  { icon: Heart,  title: "Improved Quality of Life", desc: "Many patients report better sleep, reduced pain, and enhanced well-being"                 },
  { icon: Users,  title: "Mental Health Support",    desc: "Assistance with anxiety, PTSD, and other mental health conditions"                        },
  { icon: Shield, title: "Legal Protection",         desc: "Legally access medical cannabis in Pennsylvania with your certification"                  },
];

const stats = [
  { value: "98%", label: "Success Rate" },
  { value: "98%", label: "Avg. Rating"  },
  { value: "24hr", label: "Avg. Approval" },
];

export default function PatientBenefits() {
  return (
    <section className="w-full bg-[#0d2e2a] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* ── LEFT: Image card ── */}
        <div className="relative w-full max-w-xs shrink-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Replace with your actual image via next/image */}
          <div className="w-full aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 flex items-end">
            {/* Placeholder leaf icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Leaf className="w-32 h-32 text-green-300" />
            </div>
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm flex justify-around px-4 py-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-white font-extrabold text-base leading-none">{value}</span>
                <span className="text-white/50 text-[10px] mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {/* Badge */}
          <span className="inline-flex w-fit items-center border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full">
            Patient Benefits
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Benefits of Your{" "}
            <span className="text-emerald-400">Medical Cannabis Card</span>{" "}
            <br className="hidden md:block" />
            in{" "}
            <span className="text-emerald-400">Pennsylvania</span>
          </h2>

          {/* Body */}
          <p className="text-white/50 text-sm leading-relaxed">
            With a valid medical marijuana card Pennsylvania certification, patients gain
            legal access to dispensaries throughout the state, offering a wide variety of
            medical cannabis products tailored to specific conditions and preferences.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Beyond legal access, cardholders enjoy greater product selection, lower costs
            compared to recreational options, and the peace of mind that comes with
            following state-compliant treatment protocols under professional medical guidance.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-emerald-400" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}