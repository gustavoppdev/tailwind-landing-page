import {
  reformLogo,
  savvyCal,
  statamicLogo,
  transistorLogo,
  tupleLogo,
} from "@/assets";
import { Plan, Question } from "./types";

export const NAVIGATION_LINKS = [
  { key: "navigationLinks.product", href: "#product" },
  { key: "navigationLinks.features", href: "#features" },
  { key: "navigationLinks.pricing", href: "#pricing" },
  { key: "navigationLinks.faq", href: "#faq" },
  {
    key: "navigationLinks.credits",
    href: "https://tailwindcss.com/plus/ui-blocks/marketing/page-examples/landing-pages",
  },
];

export const ARRAY_LOGOS = [
  { logoImage: transistorLogo, alt: "Transistor Logo" },
  { logoImage: reformLogo, alt: "Reform Logo" },
  { logoImage: tupleLogo, alt: "Tuple Logo" },
  { logoImage: savvyCal, alt: "SavvyCal Logo" },
  { logoImage: statamicLogo, alt: "Statamic Logo" },
];

export const DEPLOY_BENEFITS = [
  {
    titleKey: "benefits.pushToDeploy.title",
    descriptionKey: "benefits.pushToDeploy.description",
  },
  {
    titleKey: "benefits.sslCertificates.title",
    descriptionKey: "benefits.sslCertificates.description",
  },
  {
    titleKey: "benefits.simpleQueues.title",
    descriptionKey: "benefits.simpleQueues.description",
  },
  {
    titleKey: "benefits.advancedSecurity.title",
    descriptionKey: "benefits.advancedSecurity.description",
  },
];

export const PRICINGS: Plan[] = [
  {
    name: "plans.freelancer.title",
    description: "plans.freelancer.description",
    price: "plans.freelancer.price",
    benefits: "plans.freelancer.benefits",
    mostPopular: false,
  },
  {
    name: "plans.startup.title",
    description: "plans.startup.description",
    price: "plans.startup.price",
    benefits: "plans.startup.benefits",
    mostPopular: true,
  },
  {
    name: "plans.enterprise.title",
    description: "plans.enterprise.description",
    price: "plans.enterprise.price",
    benefits: "plans.enterprise.benefits",
    mostPopular: false,
  },
];

export const FAQ: Question[] = [
  {
    question: "firstQuestion.question",
    answer: "firstQuestion.answer",
  },
  {
    question: "secondQuestion.question",
    answer: "secondQuestion.answer",
  },
  {
    question: "thirdQuestion.question",
    answer: "thirdQuestion.answer",
  },
  {
    question: "fourthQuestion.question",
    answer: "fourthQuestion.answer",
  },
  {
    question: "fifthQuestion.question",
    answer: "fifthQuestion.answer",
  },
];
