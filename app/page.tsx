import Header from "@/components/header/header";
import Hero from "@/components/landing/hero";
import Trust from "@/components/landing/trust";
import Steps from "@/components/landing/steps";
import ExpertCare from "@/components/landing/expertcare";
import Stats from "@/components/landing/stats";
import StartJourney from "@/components/landing/startjourney";
import Conditions from "@/components/landing/conditions";
import Benifits from "@/components/landing/benifits";
import Pricing from "@/components/landing/pricing";
import Reviews from "@/components/landing/reviews";
import SpeakWithDoc from "@/components/landing/speakwithdoc";
import Faq from "@/components/landing/faq";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <Steps />
      <ExpertCare />
      <Stats />
      <StartJourney />
      <Conditions />
      <Benifits />
      <Pricing />
      <Reviews />
      <Faq />
      <SpeakWithDoc />
      <Footer />
      <div className="back_to_top"><BackToTop /> </ div>
    </>
  );
}