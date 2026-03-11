import formicon from "@/public/assets/form-top-icon.png";
import Image from "next/image";
import Form from "@/components/landing/form";

export default function Hero() {
  const features = [
    { label: "Fast Approval", icon: formicon },
    { label: "100% Online", icon: formicon },
    { label: "Licensed Doctors", icon: formicon }
  ];
  const heroList = [
    "Licensed Pennsylvania Medical Marijuana Doctor evaluations",
    "HIPAA-compliant secure consultations",
    "Money-back guarantee if not approved",
  ];
  return (
    <section className="w-full py-16 px-4 hero_section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 hero_right_wrap">
            <button className="top_chips pb-10px">Pennsylvania Licensed Physicians</button>
            <h1 className="pb-20px pt-10px text-white">Apply for a Pennsylvania Medical Marijuana Card <span>Online Today</span></h1>
            <p className="text-white">Doctor evaluations help patients qualify for a medical marijuana card Pennsylvania residents trust, with licensed providers, private consultations, and a simple process.</p>
            <div className="features_wrap flex gap-4 pt-30px pb-30px">
              {features.map(({ label, icon }) => (
                <div className="feature_item" key={label}>
                  <Image src={icon} alt="icon here" width={50} height={50} />
                  <h3>{label}</h3>
                </div>
              ))}
            </div>
            <div className="hero_ul_li">
              <ul>
                {heroList.map((item) => (
                  <li className="pb-10px" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

