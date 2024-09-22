

import "./globals.css";
import {SessionProvider} from "next-auth/react";
import SessionWrapper from "@/app/_wrapper";
// import { Inter } from "next/font/google";
//
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Accounts",
  description: "Best Accounting software",
};

export default function RootLayout({session, children }) {


  return (
      <html lang="en">
      {/*<body className={inter.className}>*/}
      <body >
      <SessionWrapper
      session={session}
      >
          <div>{children}</div>
      </SessionWrapper>


      </body>
      </html>
);
}

// max-w-4xl mx-auto p-4