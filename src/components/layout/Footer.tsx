"use client";

import { tailwindlogo } from "@/assets";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  const footerLinks = t.raw("Footer") as {
    title: string;
    items: string[];
  }[];

  return (
    <footer className="container mx-auto px-4 lg:px-6 pt-32 my-12 grid grid-cols-1 xl:grid-cols-3 gap-16 border-t">
      <Image
        src={tailwindlogo}
        width={40}
        height={40}
        alt="tailwindlogo"
        className="col-span-1"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 text-muted-foreground gap-8 col-span-2">
        {footerLinks.map((group) => (
          <ul key={group.title} className="space-y-4">
            {[group.title, ...group.items].map((link) => (
              <li
                key={link}
                className="first:font-medium first:text-black first:mb-6 hover:text-black/90 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
