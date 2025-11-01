import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import InitialLoader from "./components/InitialLoader";

// Fonts are loaded via CSS @import in globals.css

export const metadata: Metadata = {
  title: "New Kandy Fire - Fire Safety Solutions Sri Lanka",
  description:
    "Leading fire safety equipment and solutions provider in Sri Lanka",
  icons: {
    icon: "/logo-only.ico", // SVG favicon
    shortcut: "/logo-only.ico", // optional fallback
    apple: "/logo-only.ico", // optional iOS fallback
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <InitialLoader>
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="pt-32">{children}</main>
          </Suspense>
          <Footer />
        </InitialLoader>
      </body>
    </html>
  );
}
