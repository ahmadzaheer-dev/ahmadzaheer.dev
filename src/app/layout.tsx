import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], fallback: ["roboto"] });

export const metadata: Metadata = {
  title: "Ahmad Zaheer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgColor text-typo`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
