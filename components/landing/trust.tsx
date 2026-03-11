import { Shield, Clock, Users, DollarSign, Heart, MessageSquare } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Licensed & Trusted",
    desc: "Work with licensed Pennsylvania physicians who understand state medical cannabis regulations",
  },
  {
    icon: Clock,
    title: "Fast & Simple",
    desc: "Complete evaluations quickly through our streamlined online consultation process",
  },
  {
    icon: Users,
    title: "Thousands Helped",
    desc: "Join thousands of satisfied patients who have received their Pennsylvania Medical Marijuana Card Online",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "No hidden fees. Just straightforward pricing for your medical cannabis card in Pennsylvania",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Personalized attention and support throughout your medical cannabis journey",
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    desc: "Patient support available when you need it most",
  },
];

export default function trust() {
  return (
    <section className="trusted_section">
      <div className="trusted_header">
        <h2 className="pb-10px">
          Trusted Choice for a Medical Marijuana Card <br /><span className="highlight"> in Pennsylvania</span>
        </h2>
        <p className="pb-20px">
          Trusted by thousands of patients, our licensed doctors provide secure evaluations for a
          Pennsylvania Medical Marijuana Card Online through a fast and affordable process.
        </p>
      </div>

      <div className="trusted_grid">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="trusted_card">
            <div className="card_icon">
              <Icon size={22} />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}