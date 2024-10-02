

import "./globals.css";
import SessionWrapper from "@/app/_wrapper";

import { Inter } from "next/font/google";
import {Toaster} from "sonner";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Accounts",
  description: "Best Accounting software",
};

export default function RootLayout({children }) {


  return (
      <html lang="en">
      <body className={inter.className}>
      <SessionWrapper
      >
      <Toaster richColors/>
          <div>{children}</div>
      </SessionWrapper>



      </body>
      </html>
);
}

// max-w-4xl mx-auto p-4