"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is a Medical Cannabis Card in Pennsylvania and who needs it?",
    a: "This card allows eligible patients to legally access medical cannabis within the state after approval for a qualifying medical condition.",
  },
  { q: "How do I know if I qualify for medical cannabis?",                        a: "A licensed physician will review your medical history and determine if you have a qualifying condition under Pennsylvania state law." },
  { q: "How long does the evaluation and approval process usually take?",          a: "Most patients receive approval within 24 hours of their consultation. The state registration may take a few additional days." },
  { q: "Do I need to visit a clinic in person for the evaluation?",               a: "No. All evaluations are conducted 100% online via secure video consultation from the comfort of your home." },
  { q: "Can a licensed physician review my condition and guide me?",              a: "Yes. Our board-certified Pennsylvania physicians will thoroughly review your condition and provide personalized guidance." },
  { q: "Is medical cannabis legal for registered patients in the state?",         a: "Yes. Pennsylvania has a legal medical marijuana program. Registered patients are fully protected under state law." },
  { q: "Can someone apply on behalf of a minor or dependent patient?",            a: "Yes. A parent or legal guardian may apply on behalf of a minor patient. Additional documentation will be required." },
  { q: "Will my medical information remain private during the evaluation?",       a: "Absolutely. Our platform is fully HIPAA-compliant and your medical information is kept strictly confidential." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-[#0d2e2a] text-white py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">

        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <span className="inline-flex mx-auto items-center border border-white/20 text-white/60 text-xs px-4 py-1.5 rounded-full w-fit">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-white/45 text-sm">
            Everything you need to know about getting your medical marijuana card in Pennsylvania.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-[#1a3a35] rounded-xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              >
                <span className="text-sm font-medium text-white/90">{q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  {open === i
                    ? <Minus className="w-3 h-3 text-white" strokeWidth={2.5} />
                    : <Plus  className="w-3 h-3 text-white" strokeWidth={2.5} />}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-4 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-3">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}