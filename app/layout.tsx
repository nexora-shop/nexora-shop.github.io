import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora — Discover Better Products",
  description: "Nexora is a global product discovery platform featuring curated products across multiple categories.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
