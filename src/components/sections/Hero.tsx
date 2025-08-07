// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Lucide Icons
import { ArrowRight } from "lucide-react";

// Assets
import { heroImage } from "@/assets";

const Hero = () => {
  const t = useTranslations("HeroSection");

  return (
    <section
      id="product"
      className="container relative  mx-auto p-4 lg:p-6 grid grid-cols-1 place-content-center gap-24 text-center min-h-[calc(100vh-86px)]"
    >
      {/* Fundo colorido embaçado */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Para observar melhor, altere o blur pra 0 */}
        <div className=" absolute top-[0%] left-[0%] rotate-40 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-b from-purple-300 to-pink-300 opacity-50 blur-[80px]" />
        <div className="hidden md:block absolute top-[0%] left-[28%] -rotate-45  w-[400px] h-[200px]  rounded-full bg-gradient-to-t from-pink-300 to-purple-300 opacity-50 blur-[80px]" />
      </div>

      <div className="mt-20 flex flex-col gap-8 max-w-3xl mx-auto">
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground font-medium lg:text-lg">
          {t("paragraph")}
        </p>

        <div className="space-x-4">
          <Button className="bg-indigo-600 hover:bg-indigo-600/90">
            {t("getStartedBtn")}
          </Button>
          <Button
            variant={"ghost"}
            className="bg-transparent hover:bg-transparent hover:text-neutral-700"
          >
            {t("learnMoreBtn")}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto border rounded-xl bg-neutral-100 p-2 lg:p-4 shadow-lg">
        <div className="relative w-full rounded-xl shadow overflow-hidden">
          <Image
            src={heroImage}
            placeholder="blur"
            alt="App screenshot"
            priority
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="w-full h-auto object-contain object-top border rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
