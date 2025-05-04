import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ali Tunçer",
  description: "Portfolyo sitem",
  icons: {
    icon: "/Ali-icon.png", // Normal favicon
    shortcut: "/Ali-icon.png", // Kısayol ikonu
    apple: "/Ali-icon.png", // Apple Touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: ufak farklılıklar olsa bile uyarı atmasını önler
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="w-full h-full  transition-colors duration-1000">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
