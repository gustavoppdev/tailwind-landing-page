import { FAQ } from "@/lib/constants";
import { useTranslations } from "next-intl";

const FAQSection = () => {
  const t = useTranslations("FAQSection");
  return (
    <section id="faq" className="container mx-auto p-4 lg:p-6 space-y-12 my-24">
      <h2 className="text-5xl font-semibold">{t("title")}</h2>
      <div className="max-w-4xl lg:max-w-full mx-auto space-y-2">
        {FAQ.map((question) => (
          <div
            key={t(question.question)}
            className="border-b py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 last:border-none"
          >
            <h3 className="font-semibold">{t(question.question)}</h3>
            <p className="text-muted-foreground">{t(question.answer)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
