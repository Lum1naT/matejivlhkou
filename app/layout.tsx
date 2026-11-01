import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FTIZOL – Izolace vlhkosti",
  description:
    "Kompletní řešení vlhkosti zdiva: chemická injektáž, izolační stěrky, sanační omítky a odborné poradenství.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [{ url: "/ftizol-logo-original.png?v=3", type: "image/png" }],
    shortcut: "/ftizol-logo-original.png?v=3",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
