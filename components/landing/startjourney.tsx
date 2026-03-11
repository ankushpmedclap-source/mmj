import { Clock, Shield, FileText, Star, ArrowRight } from "lucide-react";

const features = [
  { icon: Clock,    title: "24 Hour Appointments", desc: "Quick scheduling available"  },
  { icon: Shield,   title: "100% Confidential",    desc: "HIPAA compliant platform"    },
  { icon: FileText, title: "Licensed Doctors",     desc: "PA certified physicians"     },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#0d2e2a] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 border border-white/20 text-white/80 text-xs px-4 py-1.5 rounded-full">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          Start Your Journey Today
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Connect With a Doctor for Your{" "}
          <span className="text-emerald-400">Medical Marijuana Card</span>{" "}
          in Pennsylvania
        </h1>

        {/* Subtext */}
        <p className="text-white/60 text-sm max-w-lg leading-relaxed">
          Licensed physicians offer secure online consultations to guide patients through the evaluation
          process with care and confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mt-1">
          <button className="inline-flex items-center gap-2 border border-white/40 text-white text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 text-white text-sm px-5 py-2.5 rounded-md hover:bg-white/20 transition">
            Learn More
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 text-center">
              <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-white/50">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}