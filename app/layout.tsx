'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Spline from '@splinetool/react-spline';
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>Videx</Head>
        <body className={inter.className}>
          <Spline className="z-0 absolute w-screen h-screen " scene="https://prod.spline.design/VwNWYsHBU0JUaaG5/scene.splinecode" />
            {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
