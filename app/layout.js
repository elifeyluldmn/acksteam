import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACK Steam - Portable Sauna & Cold Plunge",
  description: "Book your portable sauna and cold plunge experience in Nantucket.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation Bar */}
        <nav style={{ textAlign: "center", padding: "20px", background: "#333", color: "#fff" }}>
          <Link href="/" style={{ margin: "10px", color: "#fff" }}>Home</Link>
          <Link href="/about" style={{ margin: "10px", color: "#fff" }}>About</Link>
          <Link href="/booking" style={{ margin: "10px", color: "#fff" }}>Booking</Link>
          <Link href="/contact" style={{ margin: "10px", color: "#fff" }}>Contact</Link>

        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
