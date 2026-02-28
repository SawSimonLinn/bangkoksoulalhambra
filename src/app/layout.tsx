import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Bangkok Soul | Authentic Thai Restaurant in San Gabriel, CA",
  description:
    "Enjoy authentic Thai cuisine at Bangkok Soul in San Gabriel. Dine-in, takeout, and delivery available. View menu and order online today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <Analytics />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
