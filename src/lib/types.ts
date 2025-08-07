export interface Plan {
  name: string;
  description: string;
  price: string;
  benefits: string;
  mostPopular: boolean;
}

export type Question = {
  question: string;
  answer: string;
};

export type MetadataMessages = {
  title: string;
  description: string;
  keywords: string[];
};
