import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel App UI/UX",
  description: "Travel App for Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
