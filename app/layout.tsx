import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/nunito";


export const metadata: Metadata = {
  title: "Gem Know Model HSS | High School Education",
  description: "Discover the excellence in education at Gem Know Model HSS, providing top-notch high school education for future leaders.",
  keywords: [
    "Gem Know Model HSS",
    "High School",
    "Education",
    "Top Education",
    "Gem Know",
    "Quality High School Education",

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
      <body className="antialiased" style={{ fontFamily: "Nunito"}}>
        {children}
      </body>
    </html>
  );
}
