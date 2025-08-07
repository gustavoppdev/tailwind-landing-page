"use client";
// React
import { useState } from "react";

// Next.js
import Image from "next/image";

// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Assets & Icons
import { tailwindlogo } from "@/assets";
import { Menu } from "lucide-react";

// Constants
import { NAVIGATION_LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NavbarMobile = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Sheet open={isOpen}>
      <SheetTrigger onClick={toggleMenu}>
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-4/5 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only"></SheetTitle>
          <SheetDescription className="sr-only"></SheetDescription>
        </SheetHeader>
        <Link href={"/"}>
          <Image
            src={tailwindlogo}
            width={40}
            height={40}
            alt="tailwindlogo"
            className="object-contain mx-4 -translate-y-8 "
          />
        </Link>
        <ul className="flex flex-col gap-4 border-b pb-4">
          {NAVIGATION_LINKS.map((link) => (
            <li key={t(link.key)}>
              <Button
                variant={"ghost"}
                className="w-full justify-start "
                onClick={toggleMenu}
              >
                <Link href={link.href}>{t(link.key)}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <Button variant={"ghost"} className="w-full justify-start">
          {t("login")}
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
