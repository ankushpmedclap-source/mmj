import { Check } from "lucide-react";

const plans = [
  {
    name: "New Patient",
    price: "$199",
    desc: "Complete evaluation & certification",
    popular: true,
    cta: "Get Started Now →",
    ctaStyle: "bg-emerald-500 hover:bg-emerald-600 text-white",
    features: [
      "Online consultation with licensed physician",
      "Medical marijuana certification",
      "Personalized treatment guidance",
      "Follow-up support included",
      "100% money-back guarantee if not approved",
    ],
  },
  {
    name: "Renewal",
    price: "$149",
    desc: "Annual card renewal",
    popular: false,
    cta: "Renew Now →",
    ctaStyle: "bg-[#1a3a36] hover:bg-[#224a44] text-white border border-white/10",
    features: [
      "Quick renewal consultation",
      "Updated certification",
      "Treatment plan review",
      "Same-day processing available",
      "Continued care support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-[#0d2e2a] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border border-white/20 text-white/60 text-xs px-4 py-1.5 rounded-full">
            ✦ SIMPLE PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Transparent Pricing for <br />
            Your <span className="text-emerald-400">MMJ Card Online</span>
          </h2>
          <p className="text-white/45 text-sm max-w-md">
            Simple, upfront pricing for a{" "}
            <span className="text-emerald-400">medical marijuana card</span> in
            Pennsylvania with no hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {plans.map(({ name, price, desc, popular, cta, ctaStyle, features }) => (
            <div
              key={name}
              className="relative bg-white text-gray-800 rounded-2xl p-7 flex flex-col gap-5 shadow-xl"
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  ★ Most Popular
                </span>
              )}

              {/* Plan name & price */}
              <div className="flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mb-2">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-semibold text-gray-500">{name}</p>
                <p className="text-4xl font-extrabold text-gray-900">{price}</p>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full mt-auto py-3 rounded-xl text-sm font-semibold transition ${ctaStyle}`}>
                {cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/30 text-xs text-center max-w-sm">
          Note: Pennsylvania state registration fee of $50 is paid separately to the PA Department of Health.
        </p>

      </div>
    </section>
  );
}