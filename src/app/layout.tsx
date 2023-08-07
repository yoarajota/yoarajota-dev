import type { Metadata } from "next";
import { Prompt, Ubuntu, UnifrakturCook } from "next/font/google";
import React from "react";

const prompt = Prompt({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--prompt",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--ubuntu",
});

const unifrakturCook = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--unifrakturCook",
});

export const metadata: Metadata = {
  title: "y o a r a j o t a",
  description: "Portfolio de João Vítor Basso Sberse!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${unifrakturCook.variable} ${ubuntu.variable} ${prompt.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
