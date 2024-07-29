import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";

import "./globals.css";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });
const gothamBook = localFont({
  src: "../fonts/gotham-book.woff2",
});

export const metadata: Metadata = {
  title: "Smart Fit",
  description: "Um desafio frontend smartfit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={`${gothamBook.className}  mx-auto`}>
        <header className="bg-slate-950 flex justify-center py-8 w-full">
          <Image
            src="images/logo.svg"
            alt="Smart Fit"
            width={250}
            height={100}
          />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
