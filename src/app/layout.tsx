"use client"; // This makes the entire file a Client Component

// Standard imports
import { Inter } from "next/font/google";
import "./globals.css";

// React and MUI Theme imports
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';

// Your component imports
import { Header } from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/*
The 'export const metadata' object has been completely removed.
Because this is a "use client" file, that export is disallowed by Next.js.
You would need to manage the page title and meta tags differently now,
for example, using a useEffect hook to set document.title.
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* You can still keep basic head tags here */}
        <title>KMARIS - Immigration Forms Expert</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#002542" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        {/*
          The ThemeProvider now wraps your entire application,
          which fixes the runtime error.
        */}
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}