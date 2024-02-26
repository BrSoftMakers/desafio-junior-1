import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "react-hot-toast";
import ContextProvider from "./context/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soft Petshop",
  description: "Desafio Junior 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ContextProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {/* <Header /> */}
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
