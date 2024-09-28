"use client";

import React from "react";
import Image from "next/image"
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import ReportCard, {HomeCard} from "@/components/mycards";
import {MdAccountBalance, MdBalance, MdForum, MdInventory2, MdPostAdd, MdReport, MdStore} from "react-icons/md";
const basicReport = [
    {
        'title':"Multi-Store Management",
        'description':"Allows users to create and manage multiple stores under a single account with separate accounting records for each store.",
        'icon': <MdStore/>,

    },
    {
        'title':"Chart of Accounts",
        'description':"Supports a default chart of accounts for each store, while allowing users to customize or create their own chart of accounts",
        'icon': <MdAccountBalance/>,

    },
    {
        "title": "Voucher Entry System",
        "description": "Facilitates recording all financial transactions using vouchers such as sales, purchase, payment, and receipt entries.",
        'icon': <MdForum/>,
    },

    {
        'title':"Inventory Management",
        'description':"Manages stock levels, tracks purchases and sales, and provides real-time inventory reports for each store.",
        'icon': <MdInventory2/>,
    },
    {
        "title": "Financial Reporting",
        "description": "Generates various reports such as profit and loss statements, balance sheets, cash flow, and trial balance for each store.",
        'icon': <MdReport/>,
    },
    {
        "title": "Role-Based Access Control",
        "description": "Enables assigning different roles and permissions to users within the store, ensuring secure and restricted access to financial data.",
        'icon': <MdPostAdd/>,
    },
    {
        "title": "Export and Import",
        "description": "Allow users to import and export data various kinds of data to effectively manage time and workload",
        'icon': <MdInventory2/>,
    }

]
const HomePage = () => {


  return (
  <div className="max-w-screen-xl mx-auto">
      <section className=" flex-row flex  justify-between p-3 h-[100vh] items-center">
          <div className="flex flex-col  w-1/2 gap-20">
              <div>
              <h1 className="font-extrabold text-5xl">Empowering Your Business with Seamless Accounting Solutions</h1>
              <p className="mt-6 text-xl">Making your Business Transactions Simplify and Easy to manage</p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-15">
                  <Link href="/auth">
                  <Button>Get Started</Button>
                  </Link>
                  <Link href="/docs/getting-started">
              <Button variant="outline">View Documentation</Button>
                  </Link>
              </div>
          </div>
          <div>

          <Image  alt="home img" src="/homeimg.jpg" width="500"  height="700"/>
          </div>

      </section>
      <section className=" flex flex-col justify-between items-center mt-10 h-[100vh]">
          <div className="flex flex-col justify-between items-center w-2/3 py-14">
              <h1 className="text-2xl font-bold">Features</h1>
              <p className="container text-xl  mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> Everything you need to manage your web accounting Store. Keep track of all of your payments, invoices, expenses, etc. in one place with zero fees</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 ">
              {basicReport.map((item, index) => (
                  <HomeCard key={index} element={item}/>
              ))}
          </div>
          <div>

          </div>
      </section>
  </div>
  );
};


export default HomePage;
