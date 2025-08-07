import { Button } from "@/components/ui/button";
import { Plan } from "@/lib/types";
import { Check } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import React from "react";

type PrincingCardProps = {
  plan: Plan;
};

const PricingCard = ({ plan }: PrincingCardProps) => {
  const t = useTranslations("PricingSection");
  const locale = useLocale() === "pt" ? "pt" : "en";
  const currency = locale === "pt" ? "BRL" : "USD";
  const format = useFormatter();

  const benefits = t.raw(plan.benefits) as string[];

  return (
    <div
      className={`p-8 max-lg:border max-lg:rounded-4xl rounded-4xl max-w-md h-[500px] flex flex-col gap-6 text-left ${
        plan.mostPopular ? "h-[540px]" : " "
      } ${
        t(plan.name) === "Freelancer"
          ? "border-t border-l border-b rounded-br-none rounded-tr-none "
          : t(plan.name) === "Startup"
          ? "border rounded-b-none "
          : "border-t border-r border-b rounded-bl-none rounded-tl-none "
      }`}
    >
      <div className="space-y-6 flex-1">
        <div className="flex justify-between items-center">
          <h3
            className={`font-semibold text-xl ${
              plan.mostPopular ? "text-indigo-600" : ""
            }`}
          >
            {t(plan.name)}
          </h3>
          {plan.mostPopular && (
            <span className="text-indigo-600 text-xs font-semibold p-2 rounded-full bg-indigo-100">
              Most popular
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{t(plan.description)}</p>
        <h4 className="text-4xl font-semibold">
          {format.number(Number(t.rich(plan.price)), {
            style: "currency",
            currency: currency,
          })}
          <span className="text-sm">{t("plans.pricePerMonth")}</span>
        </h4>
        <ul className="space-y-4 mt-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-4 text-muted-foreground text-sm"
            >
              <Check className="size-4 text-indigo-600" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={"ghost"}
        size={"lg"}
        className={`w-full cursor-pointer border  ${
          plan.mostPopular
            ? "bg-indigo-600 hover:bg-indigo-600/90 text-white hover:text-white"
            : "text-indigo-600 hover:text-indigo-600 hover:bg-white border-indigo-300/90 hover:border-indigo-600"
        }`}
      >
        {t("plans.buyPlanBtn")}
      </Button>
    </div>
  );
};

export default PricingCard;
