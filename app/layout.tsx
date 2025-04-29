import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './globals.css';
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: 'User App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
