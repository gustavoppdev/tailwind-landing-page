"use client";
// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// React
import { useEffect, useState } from "react";

// Components
import NavbarMobile from "./NavbarMobile";
import { Button } from "../ui/button";
import LanguageSwitcher from "../common/LanguageSwitcher";

// Assets & Icons
import { tailwindlogo } from "@/assets";
import { ArrowRight } from "lucide-react";

// Constants
import { NAVIGATION_LINKS } from "@/lib/constants";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Verifica se está no topo
      setIsAtTop(currentScrollY < 10);

      // Mostrar/ocultar navbar com base na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // rolando para baixo, esconde
      } else {
        setIsVisible(true); // rolando para cima, mostra
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50  transition-all duration-300 ${
        isAtTop ? "bg-transparent" : "bg-white/90 backdrop-blur-md border-b"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container mx-auto relative flex justify-between items-center p-4 lg:p-6">
        <Link href="/">
          <Image src={tailwindlogo} width={40} height={40} alt="tailwindlogo" />
        </Link>

        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <li key={t(link.key)}>
              <Button variant={"link"} className="font-semibold">
                <Link href={link.href}>{t(link.key)}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant={"ghost"} className="flex font-semibold">
            {t("login")}
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="lg:hidden flex gap-4">
          <LanguageSwitcher />
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
