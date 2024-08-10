

import "./globals.css";
import { Inter } from "next/font/google";
import HomeNav from "@/components/client/home_navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Accounts",
  description: "Best Accounting software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNav />
        <div className="flex h-screen">
      
        <div className="w-4/5">
          
          <div >{children}</div>
        </div>
        </div>
      </body>
    </html>
  );
}

// max-w-4xl mx-auto p-4