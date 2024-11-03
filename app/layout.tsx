import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gem Know Model HSS | High School Education",
  description: "Discover the excellence in education at Gem Know Model HSS, providing top-notch high school education for future leaders.",
  keywords: [
    "Gem Know Model HSS",
    "high school",
    "education",
    // ... other keywords
  ].join(", "),
  openGraph: {
    title: "Gem Know Model HSS",
    description: "Providing quality education and fostering future leaders at Gem Know Model HSS.",
    url: "https://gemknowmodelhss.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gem Know Model HSS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gem Know Model HSS | Quality High School Education",
    description: "Join Gem Know Model HSS and discover excellence in education for future leaders.",
    images: ["/images/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://gemknowmodelhss.com" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dongle&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
