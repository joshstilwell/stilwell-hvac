import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stilwell Heating & Cooling | HVAC Repair & Installation",
  description: "Professional heating and air conditioning services. Repair, installation, and maintenance for Charlotte, Monroe, Concord and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
