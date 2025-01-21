"use client"

import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/layout/topbar";
import Header from "@/components/layout/middlebar";
import Footer from "@/components/layout/footer";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}

