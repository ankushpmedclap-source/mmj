import { Users, Star, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users,       value: "5,000+", label: "Patients Served"      },
  { icon: Star,        value: "4.9/5",  label: "Average Rating"       },
  { icon: Clock,       value: "24hrs",  label: "Avg. Approval Time"   },
  { icon: CheckCircle, value: "98%",    label: "Success Rate"         },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-white py-8 px-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center md:justify-between gap-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 min-w-[100px]">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 leading-none">{value}</span>
            <span className="text-xs text-gray-400 text-center">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}