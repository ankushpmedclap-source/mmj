import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["How It Works", "Qualifying Conditions", "Pricing", "FAQ", "About Us"];
const legalLinks  = ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "State Regulations", "Disclaimer"];

const socialIcons = [
  { label: "Facebook",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter",   d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
];

const contacts = [
  { icon: Phone,  primary: "1-800-123-4567",       secondary: "Mon-Fri 9AM-5PM EST"  },
  { icon: Mail,   primary: "support@pammjcard.com", secondary: "24/7 Email Support"   },
  { icon: MapPin, primary: "All of Pennsylvania",   secondary: "100% Online Service"  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1f1c] text-white/60 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-row flex-wrap gap-10 justify-between">

        {/* ── Col 1: Brand + Social + Contact ── */}
        <div className="flex flex-col gap-5 max-w-[220px]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2l-1-1c1-1 3-3 3-5-2 1-4 3-5 5L6 8c2-2 6-6 6-6C5 4 3 9 3 9c-1 5 2 9 2 9s-1-2-1-5c1-1 2-2 3-2 0 4 1 7 4 9 0-2 0-6 2-8l5-2c-1 2-2 4-2 7 1-1 3-4 3-7l3-3c-1 3-1 7-1 9 1-2 2-4 2-7z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm">Pennsylvania</p>
              <p className="text-emerald-400 font-semibold text-sm">Medical Marijuana Card</p>
            </div>
          </div>

          <p className="text-xs leading-relaxed">
            Trusted by thousands of Pennsylvania patients for secure, professional medical
            marijuana evaluations.
          </p>

          {/* Social */}
          <div className="flex gap-2">
            {socialIcons.map(({ label, d }) => (
              <a key={label} href="#" aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-400 transition">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

       

        {/* ── Col 3: Quick Links ── */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs hover:text-emerald-400 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Legal ── */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm">Legal</p>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs hover:text-emerald-400 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>
 {/* ── Col 2: Contact Us ── */}
 <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm">Contact Us</p>
          {contacts.map(({ icon: Icon, primary, secondary }) => (
            <div key={primary} className="flex items-start gap-2">
              <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <p className="text-xs text-white">{primary}</p>
                <p className="text-[11px]">{secondary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Pennsylvania Medical Marijuana Card. All rights reserved.
      </div>
    </footer>
  );
}