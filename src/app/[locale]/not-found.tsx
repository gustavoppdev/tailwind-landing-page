// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server"; // Para Server Components

// Components
import { Button } from "@/components/ui/button";

// Lucide Icons
import { ArrowLeft } from "lucide-react";

interface NotFoundPageProps {
  locale: string;
}

const NotFoundPage = ({ locale }: NotFoundPageProps) => {
  // Necessário para Server Components que usam traduções
  setRequestLocale(locale);

  const t = useTranslations("NotFoundPage");

  return (
    <div className="grid place-content-center relative min-h-[90vh] p-4 lg:p-6 container mx-auto text-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Para observar melhor, altere o blur pra 0 */}
        <div className=" absolute top-[0%] left-[0%] rotate-40 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-b from-purple-300 to-pink-300 opacity-50 blur-[100px]" />
        <div className="hidden md:block absolute top-[0%] left-[30%] -rotate-45  w-[400px] lg:w-[500px] h-[200px]  rounded-full bg-gradient-to-t from-pink-300 to-purple-300 opacity-50 blur-[100px]" />
        <div className=" absolute bottom-[00%] right-[15%] md:right-[0%] -rotate-45  w-[200px] md:w-[400px] lg:w-[500px] h-[200px]  rounded-full bg-gradient-to-t from-pink-300 to-purple-300 opacity-50 blur-[80px]" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-indigo-600 font-semibold text-lg">{t("code")}</h2>
        <h3 className="text-4xl lg:text-5xl font-bold">{t("title")}</h3>
        <p className="text-muted-foreground font-medium lg:text-lg max-w-2xl">
          {t("description")}
        </p>
        <Button variant={"link"} className="text-indigo-600 " asChild>
          <Link href={"/"}>
            <ArrowLeft className="size-4" /> {t("backToHome")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
