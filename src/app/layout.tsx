import type { Metadata } from "next";
import { Dancing_Script, Recursive } from "next/font/google";
import NavBar from "./_components/NavBar";
import "./globals.css";
import Footer from "./_components/Footer";

const dancing_light = Dancing_Script({
  variable: "--font-dancing",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const recursive = Recursive({
  variable: "--font-recursive",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banh Mi Che Cali - Authentic Vietnamese Cuisine",
  description:
    "Experience the best of Vietnamese cuisine at Banh Mi Che Cali. Enjoy our delicious Banh Mi, Pho, and other traditional dishes made with fresh ingredients.",
  keywords:
    "Banh Mi, Vietnamese Cuisine, Pho, Asian Restaurant, Banh Mi Che Cali, Authentic Vietnamese Food",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancing_light.variable} ${recursive.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
