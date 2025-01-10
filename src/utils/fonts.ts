import {Prata as prataFont, Inter as interFont} from "next/font/google";

export const prata = prataFont({
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-prata",
});

export const inter = interFont({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-inter",
});
