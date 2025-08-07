// Next.js & Next-Intl
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { MetadataMessages } from "@/lib/types";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// A função generateMetadata deve ser assíncrona
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages();

  const metadata = messages.metadata as MetadataMessages;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL("https://seudominio.com"),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: "https://seudominio.com",
      siteName: "TailwindCloud",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    authors: [{ name: "Gustavo Henrique" }],
    creator: "Gustavo Henrique",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${inter.className}  antialiased`}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
