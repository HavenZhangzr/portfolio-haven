import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haven Zhang | Full-Stack Developer",
  description: "Modern minimal developer portfolio for Haven Zhang."
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
