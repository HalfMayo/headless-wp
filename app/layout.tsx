import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import { Providers } from "./providers";
import { fira } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Headless WP",
  description: "Next.js starring as the front-end, WP starring as the back-end",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fira.className} flex flex-col items-center justify-center relative bg-white text-black dark:bg-black dark:text-white`}
      >
        <Providers>
          <Header />
          {children}
          {modal}
          <div id="modal-root" />
          <Footer />
        </Providers>
        {/* FOOTER (LOGO + MENU + CONTACTS) */}
      </body>
    </html>
  );
}
