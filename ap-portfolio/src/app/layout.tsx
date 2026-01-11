import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/common/SmoothScroll';
import Navbar from "@/components/common/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Anna Park | Portfolio",
  description: "Software Engineer & Product Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-[72px]`}>
        <SmoothScroll>
          {children}
          <Navbar />
        </SmoothScroll>
      </body>
    </html>
  )
}