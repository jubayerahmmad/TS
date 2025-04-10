import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs with Typescript",
  description: "Generated by create next app",
};

type reactNode = {
  children: ReactNode;
  stats: ReactNode;
  players: ReactNode;
};

export default function RootLayout({ children, players, stats }: reactNode) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="flex p-6 gap-6">
          {players}
          {stats}
        </div>
      </body>
    </html>
  );
}
