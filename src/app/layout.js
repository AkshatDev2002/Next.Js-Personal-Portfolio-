"use client";

import { Imprima, Inria_Sans, Oswald } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/src/components/ui/theme-provider";

const imprima = Imprima({
  variable: "--font-imprima",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${imprima.variable} ${inriaSans.variable} ${oswald.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="page-blur-animate">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
