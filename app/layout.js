import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Chayne.DEV",
  description: "Taking Imagination to reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={'bg-black'}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
