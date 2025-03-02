import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import AnimatedBackground from "../components/AnimatedBackground";
import { Header } from "../components/Header";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joaocdfarias.github.io"),
  title: "João Farias | Software Engineer",
  description:
    "Software Engineer with 3 years of experience specialized in web development. Building high-quality solutions with modern technologies.",
  keywords: [
    "Software Engineer",
    "Web Development",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
  ],
  authors: [{ name: "João Farias" }],
  creator: "João Farias",
  publisher: "João Farias",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joaocdfarias.github.io",
    siteName: "João Farias Portfolio",
    title: "João Farias | Software Engineer",
    description:
      "Software Engineer with 3 years of experience specialized in web development",
    images: [
      {
        url: "/og-image-minified.png",
        width: 1200,
        height: 630,
        alt: "João Farias - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@joaocdfarias",
    creator: "@joaocdfarias",
    title: "João Farias | Software Engineer",
    description:
      "Software Engineer with 3 years of experience specialized in web development",
    images: ["/og-image-minified.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSerif.className}>
        <AnimatedBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
