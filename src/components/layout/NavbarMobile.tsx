"use client";
// React
import { useState } from "react";

// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Assets & Icons
import { tailwindlogo } from "@/assets";
import { Menu } from "lucide-react";

// Constants
import { NAVIGATION_LINKS } from "@/lib/constants";

const NavbarMobile = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button variant="ghost" className="p-0" onClick={() => setIsOpen(true)}>
        <Menu className="size-6" />
      </Button>
      <SheetContent className="w-4/5 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only" />
          <SheetDescription className="sr-only" />
        </SheetHeader>

        <Link href="/" onClick={handleClick}>
          <Image
            src={tailwindlogo}
            width={40}
            height={40}
            alt="tailwindlogo"
            className="object-contain mx-4 -translate-y-8"
          />
        </Link>

        <ul className="flex flex-col gap-4 border-b pb-4">
          {NAVIGATION_LINKS.map((link) => (
            <li key={t(link.key)}>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href={link.href} onClick={handleClick}>
                  {t(link.key)}
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleClick}
        >
          {t("login")}
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
