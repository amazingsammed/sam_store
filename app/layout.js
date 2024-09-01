

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Accounts",
  description: "Best Accounting software",
};

export default function RootLayout({ children }) {


  return (
      <html lang="en">
      <body className={inter.className}>
      <div >
          <div>{children}</div>
      </div>
      </body>
    </html>
  );
}

// max-w-4xl mx-auto p-4