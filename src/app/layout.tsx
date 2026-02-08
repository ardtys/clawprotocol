import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://clawprotocol.io'),
  title: {
    default: "CLAW PROTOCOL | Archive Your Digital Legacy",
    template: "%s | CLAW PROTOCOL",
  },
  description: "Shed your digital skin. The Claw Protocol archives your Web 2.0 footprint into encrypted, immutable records. Rip through the noise. Archive what matters. Molt into the future.",
  keywords: ["web3", "archive", "protocol", "blockchain", "digital identity", "data sovereignty", "encryption", "moltbook"],
  authors: [{ name: "Claw Protocol Team" }],
  creator: "Claw Protocol",
  publisher: "Claw Protocol",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon.ico" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#dc2626"
      }
    ]
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "CLAW PROTOCOL",
    description: "Shed your digital skin. Archive your Web 2.0 legacy into the Moltbook.",
    url: "https://clawprotocol.io",
    siteName: "Claw Protocol",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Claw Protocol Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAW PROTOCOL",
    description: "Shed your digital skin. Archive your Web 2.0 legacy into the Moltbook.",
    images: ["/logo.png"],
    creator: "@clawprotocol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/logo.png" color="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/json+oembed" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${playfair.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
