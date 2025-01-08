import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Album Release Page | Kenzo",
  description: "s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-montserrat text-white bg-black">
        {children}
      </body>
    </html>
  );
}
