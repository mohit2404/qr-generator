import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";
import TrailerWrapper from "@/app/_ui/trailer-wrapper";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generated QR Codes Easily",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto h-screen">
          {children}
          {/* <TrailerWrapper /> */}
        </main>
      </body>
    </html>
  );
}
