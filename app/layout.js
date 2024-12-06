import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { Analytics } from "@vercel/analytics/react"


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
        <SplashScreen/>
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
