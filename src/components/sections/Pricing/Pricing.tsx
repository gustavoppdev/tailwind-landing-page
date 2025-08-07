// Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { PRICINGS } from "@/lib/constants";

// Components
import PricingCard from "./PricingCard";
import SectionTitle from "@/components/common/SectionTitle";

const Pricing = () => {
  const t = useTranslations("PricingSection");
  return (
    <section
      id="pricing"
      className="container mx-auto p-4 lg:p-6 my-24 space-y-24 lg:text-center"
    >
      <SectionTitle namespace="PricingSection" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0 place-items-center items-end max-w-[1200px] mx-auto">
        {PRICINGS.map((plan) => (
          <PricingCard key={t(plan.name)} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
