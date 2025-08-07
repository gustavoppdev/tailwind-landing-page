"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { useLocale } from "next-intl";
import { Button } from "../ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() === "pt" ? "pt" : "en";

  const handleLocaleChange = (locale: "pt" | "en") => {
    const newLocale = locale;

    const newPath = `/${newLocale}${pathname.substring(3)}`;

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="cursor-pointer w-fit">
          <Languages className="size-5" strokeWidth={"1.5"} />
          {/* {locale === "pt" ? (
            <>
              Portugues
              <ChevronDown className="size-4 text-neutral-400" />
            </>
          ) : (
            <>
              Ingles
              <ChevronDown className="size-4 text-neutral-400" />
            </>
          )} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange("pt")}>
          Portugues
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
          Ingles
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
