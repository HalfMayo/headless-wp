import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless WP",
  description: "Next.js starring as the front-end, WP starring as the back-end",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-center relative`}
      >
        <Header />
        {children}
        {modal}
        <div id="modal-root" />
        <Footer />
        {/* FOOTER (LOGO + MENU + CONTACTS) */}
      </body>
    </html>
  );
}
