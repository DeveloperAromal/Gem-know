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
    "secondary school",
    "quality education",
    "students",
    "academic excellence",
    "school programs",
    "high school curriculum",
    "STEM education",
    "arts education",
    "sports programs",
    "student life",
    "Gem Know School",
    "college preparation",
    "student development",
    "educational excellence",
    "modern high school",
    "school facilities",
    "high school leadership",
    "school in [Location]",
    "accredited high school",
    "best high schools",
    "top-rated high school",
    "high school teachers",
    "high school community",
    "character development",
    "academic growth",
    "student success",
    "school enrollment",
    "high school admissions",
    "private high school",
    "public high school",
    "high school courses",
    "academic support",
    "school activities",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
