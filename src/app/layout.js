"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserStore } from "@/context/UserStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserStore>
        <body className={inter.className}>{children}</body>
      </UserStore>
    </html>
  );
}
