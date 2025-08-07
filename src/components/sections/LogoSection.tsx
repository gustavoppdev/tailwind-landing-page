// Next.js
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Constants
import { ARRAY_LOGOS } from "@/lib/constants";

// Icons
import { ArrowRight } from "lucide-react";

const LogoSection = () => {
  const t = useTranslations("LogoSection");

  return (
    <section className="relative container mx-auto p-4 lg:p-6 my-24 text-center">
      {/* Fundo colorido */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[0%] right-[0%] w-[200px] h-[200px] rounded-full bg-purple-300 opacity-50 blur-[80px]" />
        <div className="absolute top-[30%] right-[50%] md:right-[20%] w-[200px] h-[200px] rounded-full bg-pink-300 opacity-50 blur-[80px] " />
      </div>

      <div className="flex justify-center xl:justify-between gap-8 items-center flex-wrap">
        {ARRAY_LOGOS.map((logo) => (
          <Image
            src={logo.logoImage}
            alt={logo.alt}
            className="w-32 md:w-42 lg:w-46"
            key={logo.alt}
          />
        ))}
      </div>
      <Button
        variant={"ghost"}
        className="border  hover:border-neutral-400 rounded-full hover:bg-white cursor-pointer whitespace-normal my-12"
      >
        <span className="hidden md:block font-normal text-muted-foreground">
          {t("paragraphBtn")}
        </span>
        <span className="text-indigo-600 flex gap-2 items-center">
          {t("ctaBtn")} <ArrowRight className="size-4" />
        </span>
      </Button>
    </section>
  );
};

export default LogoSection;
