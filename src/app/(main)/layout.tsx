import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import CursorTrackingCircle from "@/components/CircleTrackingCursor";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["roboto"],
});

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
      <body
        className={`${ubuntu.className} bg-bgColor text-typo text-sm lg:text-base flex flex-col min-h-[100vh]`}
      >
        <Nav />

        <main className="flex-1">
          <CursorTrackingCircle>{children}</CursorTrackingCircle>
        </main>

        <Footer />
      </body>
    </html>
  );
}
