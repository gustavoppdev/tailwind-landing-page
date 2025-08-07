import CTASection from "@/components/sections/CTASection";
import Deploy from "@/components/sections/Deploy";
import FAQSection from "@/components/sections/FAQSection";
import Hero from "@/components/sections/Hero";
import LogoSection from "@/components/sections/LogoSection";
import Pricing from "@/components/sections/Pricing/Pricing";
import Testimonial from "@/components/sections/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoSection />
      <Deploy />
      <Testimonial />
      <Pricing />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
