import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/common/SmoothScroll';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Anna Park | Portfolio",
  description: "Software Engineer & Product Designer",
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}