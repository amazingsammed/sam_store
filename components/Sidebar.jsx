
'use client'
import Link from "next/link";
import { MdAccountBox, MdArrowDownward, MdChevronLeft, MdChevronRight, MdDashboard, MdInventory, MdMenu, MdNote, MdPerson2, MdPerson3, MdReport } from "react-icons/md";
import React, { useState } from "react";
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/navbar";

import "@/app/globals.css";

var size = 25;

var theSidemenu = [
    {
        'title': "Dashboard",
        'icon': <MdDashboard size={size}/>,
        'hasItems': false,
        'url': "/"
    },
    // {
    //     'title': "Chart of Accounts",
    //     'icon': <MdAccountBox size={size}/>,
    //     'hasItems': false,
    //     'url': "/ChartofAccounts"
    // },
    // {
    //     'title': "Transactions",
    //     'icon': <MdDashboard size={size}/>,
    //     'hasItems': false,
    //     'url': "/dashboard"
    // },
    {
        'title': "Items",
        'icon': <MdInventory size={size}/>,
        'hasItems': false,
        'url': "/items"
    }
    // ,
    // {
    //     'title': "Financial Report",
    //     'icon': <MdReport size={size}/>,
    //     'hasItems': false,
    //     'url': "/dashboard"
    // },
    // {
    //     'title': "Customer",
    //     'icon': <MdPerson2 size={size}/>,
    //     'hasItems': false,
    //     'url': "/dashboard"
    // },
    // {
    //     'title': "Suppliers",
    //     'icon': <MdPerson3 size={size}/>,
    //     'hasItems': false,
    //     'url': "/dashboard"
    // },
    // {
    //     'title': "Voucher",
    //     'icon': <MdNote size={size}/>,
    //     'hasItems': true,
    //     'url':'',
    //     'items': [
    //         { 'name': "Sales", 'url': '/voucher/sales' },
    //         { 'name': "Purchases", 'url': '/voucher/purchases' },
    //         { 'name': "Receipt", 'url': '/voucher/receipt' }]
    // }
];

export default function SideBar() {
    const [isexpanded, setExpanded] = useState(true);
    // return (
    //     <Navbar>
    //       <NavbarBrand>
    //         {/* <AcmeLogo /> */}
    //         <p className="font-bold text-inherit">ACME</p>
    //       </NavbarBrand>
    //       <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //         <NavbarItem>
    //           <Link color="foreground" href="#">
    //             Features
    //           </Link>
    //         </NavbarItem>
    //         <NavbarItem isActive>
    //           <Link href="#" aria-current="page">
    //             Customers
    //           </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //           <Link color="foreground" href="#">
    //             Integrations
    //           </Link>
    //         </NavbarItem>
    //       </NavbarContent>
    //       <NavbarContent justify="end">
    //         <NavbarItem className="hidden lg:flex">
    //           <Link href="#">Login</Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //           <Button as={Link} color="primary" href="#" variant="flat">
    //             Sign Up
    //           </Button>
    //         </NavbarItem>
    //       </NavbarContent>
    //     </Navbar>
    //   );
    return (
        <div className=" bg-slate-800 .sidebar max-w-sm">
            <div className="bg-slate-900 text-white p-4">
                <MdMenu size={30} />
            </div >
            <div className="p-4 bg-slate-800 text-white">

                {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']} />)}
            </div>



        </div>
    );
}

export function SideBarItemExpanded({ item }) {
    const [isopen, setidopened] = useState(false);

    function toggleDrop() {
        item['hasItems'] && setidopened(!isopen);
    }
    return (
        <div>
<Link href= {item['url']}>

            <div className="hover:bg-slate-700 flex p-2.5 items-center rounded-lg justify-between" onClick={toggleDrop}>
                <div className="flex justify-between items-center ">
                    {item['icon']}
                    <h1  className="ml-3"> {item['title']}</h1>

                </div>
                {isopen ? <MdArrowDownward /> : <MdChevronRight />}
            </div>
</Link>
            <div className="ml-6">
                {isopen && item['items'].map((a) => (
                    <Link key={a['title']}href={a['url']}>
                        <div className="p-2 hover:bg-slate-700 rounded-lg flex justify-between">
                            <h1 className="ml-5 flex"> {a['name']}</h1>
                            <MdChevronRight />
                        </div>
                    </Link>
                ))}

            </div>
        </div>

    );
}







export  function App() {
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
