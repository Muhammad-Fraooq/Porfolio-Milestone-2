// Import type metadata, local fonts, and Google Fonts
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Import Google Fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose font weights as needed
  subsets: ["latin"], // Choose subset
  variable: "--font-poppins", // Custom variable name for Poppins
});

export const metadata: Metadata = {
  title: "Muhammad Farooq",
  description: "Personal Portfolio",
  icons:"/logo.jpeg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main className="pt-10 md:pt-16 ">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
