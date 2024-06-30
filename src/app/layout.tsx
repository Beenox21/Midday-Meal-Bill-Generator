import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ClientProvider from "./ClientProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Midday Meal Bill Generator",
  description: "This is a web page to generate midday meal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
        <ClientProvider>{children}</ClientProvider>

        </Suspense>
        </body>
    </html>
  );
}
