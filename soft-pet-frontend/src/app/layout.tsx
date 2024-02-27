import type { Metadata } from "next";
import { Ubuntu_Condensed } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu_Condensed({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "SoftPet",
  description: "Resolução desafio Jr 1 SoftMakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
