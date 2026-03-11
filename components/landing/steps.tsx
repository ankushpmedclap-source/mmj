import { User, Calendar, FileText, Mail } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: User,
    title: "Create Your Account",
    description:
      "Sign up and provide your basic information to start your medical marijuana card Pennsylvania application",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Schedule Consultation",
    description:
      "Book a convenient time for your online evaluation with a Pennsylvania MMJ doctor online",
  },
  {
    id: 3,
    icon: FileText,
    title: "Get Evaluated",
    description:
      "Meet with a licensed MMJ Doctor Pennsylvania through a secure virtual consultation",
  },
  {
    id: 4,
    icon: Mail,
    title: "Receive Approval",
    description:
      "Once approved, receive your certification to complete your Medical Cannabis Card in Pennsylvania registration",
  },
];

export default function MedicalCardSteps() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-10 py-20"
      style={{ backgroundColor: "#0b2620" }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl font-bold mb-1">
          Steps to Receive Your Pennsylvania
        </h2>
        <h2 className="text-4xl font-bold mb-5" style={{ color: "#2db882" }}>
          Medical Marijuana Card
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Patients can complete their evaluation through a secure online
          consultation without unnecessary clinic visits.
        </p>
      </div>

      {/* Cards — 4 in a single row */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-6xl mb-16">
        {steps.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="rounded-2xl p-6 flex flex-col"
            style={{ backgroundColor: "#112921" }}
          >
            {/* Top row: icon left, number right */}
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#2db882" }}
              >
                <Icon size={18} color="#ffffff" />
              </div>
              <span className="text-5xl font-bold leading-none text-white">
                {id}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-80"
        style={{
          border: "1px solid #2db882",
          color: "#2db882",
          backgroundColor: "transparent",
        }}
      >
        Start Your Journey Now
        <span className="text-base">→</span>
      </button>
    </section>
  );
}