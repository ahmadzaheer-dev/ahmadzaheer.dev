import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/admin/ClientSessionProvider";
import Header from "@/components/admin/Header";

const inter = Inter({ subsets: ["latin"], fallback: ["roboto"] });

export const metadata: Metadata = {
  title: "AZ Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgColor text-typo`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
