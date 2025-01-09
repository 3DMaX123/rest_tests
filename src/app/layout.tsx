import type { Metadata } from "next";
import "@s/globals.css";
import "@s/roots.css";
import { prata, inter } from "@ut/fonts";
import MainBack from "@comp/MainBack";


export const metadata: Metadata = {
  title: "Restaurant tests"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prata.variable} ${inter.variable}`}>
        {children}
        <MainBack />
      </body>
    </html >
  );
}
