import { ReactNode } from "react";

export type Recipe = {
  content: string;
  title: string;
  healthScore: number;
  aggregateLikes: number;
  image: string;
};
