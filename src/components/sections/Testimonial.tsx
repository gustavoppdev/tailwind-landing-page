import { testimonialImage, workcationLogoWhite } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const t = useTranslations("TestimonialSection");
  return (
    <section className="relative mx-auto my-24 lg:p-6 lg:container ">
      {/* Container principal com imagem de fundo e camada escurecida */}
      <div className="relative min-h-120 lg:rounded-xl overflow-hidden max-w-7xl mx-auto">
        {/* Blurs decorativos no fundo */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className=" absolute bottom-[0%] left-[0%] -rotate-25 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-l from-purple-600 to-pink-400 opacity-60 blur-[100px]" />
          <div className=" absolute top-[0%] left-[25%] rotate-25 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-l from-purple-600 to-pink-400 opacity-60 blur-[100px]" />
          <div className=" absolute top-[20%] right-[0%] -rotate-25 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] rounded-full bg-gradient-to-r from-purple-600 to-pink-400 opacity-60 blur-[100px]" />
        </div>

        <Image
          src={testimonialImage}
          alt="Office workspace background"
          fill
          placeholder="blur"
          sizes="(max-width:768px),100vw, 1280px"
          className="object-cover brightness-30 grayscale -z-20"
          priority
        />

        {/* Conteúdo textual sobre a imagem */}
        <div className="absolute left-[0%] sm:left-[5%] top-[15%] md:top-[20%] max-w-3xl text-white flex flex-col gap-4 p-6 ">
          {/* Logo da empresa fictícia */}
          <Image
            src={workcationLogoWhite}
            width={200}
            height={60}
            alt="Workcation logo"
          />

          {/* Testemunho */}
          <blockquote className=" sm:text-lg font-semibold leading-relaxed">
            {t("testimonial")}
          </blockquote>

          {/* Nome e título */}
          <div className="mt-2">
            <h4 className="font-semibold text-base md:text-lg"> {t("name")}</h4>
            <p className="text-sm md:text-base opacity-80"> {t("title")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
