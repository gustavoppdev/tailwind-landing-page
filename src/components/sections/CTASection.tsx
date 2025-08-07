// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Lucide Icons
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const t = useTranslations("CTASection");
  return (
    <section className="relative  container mx-auto p-4 lg:p-6 my-48  text-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Para observar melhor, altere o blur pra 0 */}
        <div className=" absolute top-[0%] left-[0%] rotate-40 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-b from-purple-300 to-pink-300 opacity-50 blur-[100px]" />
        <div className="hidden md:block absolute top-[0%] left-[30%] -rotate-45  w-[400px] lg:w-[500px] h-[200px]  rounded-full bg-gradient-to-t from-pink-300 to-purple-300 opacity-50 blur-[100px]" />
        <div className=" absolute -bottom-[100%] right-[15%] md:right-[0%] -rotate-45  w-[200px] md:w-[400px] lg:w-[500px] h-[200px]  rounded-full bg-gradient-to-t from-pink-300 to-purple-300 opacity-50 blur-[80px]" />
      </div>
      {/* <div className="absolute inset-0 -z-10"> */}
      {/* Borrão no topo esquerdo */}
      {/* <div className=" absolute -top-[40%] left-[0%] -rotate-35 w-[200px] h-[200px] md:h-[400px]  rounded-full bg-pink-300 opacity-50 blur-[80px] md:blur-[300px] lg:blur-[150px] " />
        <div className=" absolute -top-[10%] left-[10%] md:-top-[80%]  md:left-[30%] rotate-60 w-[200px] h-[200px]  md:h-[600px]  rounded-full bg-purple-300 opacity-50 blur-[80px] md:blur-[300px] lg:blur-[150px] " /> */}

      {/* bottom */}
      {/* <div className=" absolute -bottom-[100%] right-[40%] -rotate-35 w-[200px] h-[200px] md:h-[400px]  rounded-full bg-pink-300 opacity-50 blur-[80px] " />
        <div className=" absolute -bottom-[90%] right-[10%] -rotate-35 w-[200px] h-[200px] md:h-[400px]  rounded-full bg-purple-300 opacity-50 blur-[80px] " /> */}
      {/* </div> */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
          {t("title")}
        </h2>
        <p className="text-muted-foreground">{t("paragraph")}</p>
        <div className="space-x-4">
          <Button
            size={"lg"}
            className="bg-indigo-600 hover:bg-indigo-600/90 text-white font-semibold"
          >
            {t("getStartedBtn")}
          </Button>
          <Button
            size={"lg"}
            variant={"ghost"}
            className="bg-transparent hover:bg-transparent hover:text-neutral-700"
          >
            {t("learnMoreBtn")} <ArrowRight className="size-4 font-semibold" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
