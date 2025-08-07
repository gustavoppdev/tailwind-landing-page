import { useTranslations } from "next-intl";

type SectionTitleProps = {
  namespace: string;
};

const SectionTitle = ({ namespace }: SectionTitleProps) => {
  const t = useTranslations(namespace);
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="font-semibold text-indigo-600 mb-4 ">{t("subtitle")}</h3>
      <h2 className="font-semibold text-5xl mb-6 tracking-tight">
        {t("title")}
      </h2>
      <p className="text-muted-foreground font-medium">{t("paragraph")}</p>
    </div>
  );
};

export default SectionTitle;
