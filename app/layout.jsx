import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oáza Zdravia",
  description: "Zažite pohodu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 flex flex-col min-h-screen  ">
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
