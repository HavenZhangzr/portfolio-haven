import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haven Zhang | Full-Stack Developer",
  description: "Modern minimal developer portfolio for Haven Zhang.",
  icons: {
    icon: {
      url: "/hz-favicon.svg",
      type: "image/svg+xml"
    },
    shortcut: "/hz-favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
