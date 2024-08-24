'use client'
import Link from "next/link";
import {
    MdAccountBox,
    MdArrowDownward,
    MdChevronLeft,
    MdChevronRight,
    MdDashboard,
    MdHome,
    MdInventory,
    MdMenu,
    MdNote,
    MdPerson2,
    MdPerson3,
    MdReport,
    MdSettings
} from "react-icons/md";
import React, {useState} from "react";
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/navbar";

import "@/app/globals.css";
import {gray} from "next/dist/lib/picocolors";
import {usePathname} from "next/navigation";


var size = 23;

var theSidemenu = [
    // {
    //     'title': "Home",
    //     'icon': <MdHome size={size}/>,
    //     'hasItems': false,
    //     'url': "/"
    // },
    {
        'title': "Dashboard",
        'icon': <MdDashboard size={size}/>,
        'hasItems': false,
        'url': "/store/dashboard"
    },
    {
        'title': "Accounts",
        'icon': <MdAccountBox size={size}/>,
        'hasItems': true,
        'url': "/store/account",
        'items': [
            {'name': "Groups", 'url': '/store/account/groups'},
            {'name': "Ledgers", 'url': '/store/account/ledgers'}

        ]
    },
    {
        'title': "Sales",
        'icon': <MdReport size={size}/>,
        'hasItems': false,
        'url': "/store/sales"
    },
    {
        'title': "Purchases",
        'icon': <MdReport size={size}/>,
        'hasItems': false,
        'url': "/store/purchases"
    },
    {
        'title': "Items",
        'icon': <MdInventory size={size}/>,
        'hasItems': false,
        'url': "/store/items"
    },
    // ,
    {
        'title': "Reports",
        'icon': <MdReport size={size}/>,
        'hasItems': false,
        'url': "/store/reports"
    },
    {
        'title': "Customer",
        'icon': <MdPerson2 size={size}/>,
        'hasItems': false,
        'url': "/store/customer"
    },
    {
        'title': "Suppliers",
        'icon': <MdPerson3 size={size}/>,
        'hasItems': false,
        'url': "/store/suppliers"
    },
    {
        'title': "Voucher",
        'icon': <MdNote size={size}/>,
        'hasItems': true,
        'url': '/store/voucher',
        'items': [
            {'name': "Sales", 'url': '/store/voucher/sales'},
            {'name': "Purchases", 'url': '/store/voucher/purchases'},
            {'name': "Receipt", 'url': '/store/voucher/receipt'}]
    }
];
var configurationlist = [

    {
        'title': "Settings",
        'icon': <MdSettings size={size}/>,
        'hasItems': false,
        'url': "/store/settings"
    }
];

export default function SideBar() {
    return (
        <nav className="bg-gray-50 hidden fixed lg:flex flex-col top-0 left-0 h-dvh w-[18rem] border-r ">

            <div className=" p-4 border-b flex flex-row items-center ">
                {/*<MdMenu size={30}/>*/}
                <span className="text-3xl uppercase pl-4 font-semibold text-gray-600 ">My Store</span>
            </div>

            <ul className="p-4 mb-auto overflow-y-auto ">
                <span className="text-xs uppercase pl-4 font-semibold text-gray-600 ">Menu</span>

                {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
                <div className="h-4"></div>
                <span className="text-xs uppercase pl-4 font-semibold text-gray-600 mt-4 pt-4">Configuration</span>
                {configurationlist.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
            </ul>

            <div className=" p-4 border-b flex flex-row items-center ">
                {/*<MdMenu size={30}/>*/}

            </div>


        </nav>
    );

}


export function SideBarItemExpanded({item,}) {
    const [isopen, setidopened] = useState(false);
    const pathName = usePathname();
    console.log(pathName);


    function toggleDrop() {
        item['hasItems'] && setidopened(!isopen);
    }

    return (
        <div className="flex flex-col py-2">
            <div className={pathName === item['url'] ? " py-2 rounded bg-blue-700 flex-row flex justify-between items-center" : "py-2 hover:bg-blue-200 rounded flex flex-row justify-between items-center"}>
            <Link href={item['url']}>
                <div className="w-[12rem]">
                    <li>
                        <div
                            className={pathName === item['url'] ? "transition-colors  pl-4 text-white font-medium bg-blue-700 " :
                                "btn transition-colors  pl-4 focus-visible:ring-primary-800 text-gray-700 font-medium  "
                            }>
                            <div className="flex justify-between items-center">
                                <div className="flex-row items-center flex gap-2">
                                    {item['icon']}
                                    {item['title']}
                                </div>
                                {/*<div onClick={toggleDrop} className="p-3 m-1 hover:bg-gray-100 rounded-lg">*/}

                                {/*{ item['hasItems'] && <MdChevronRight/>}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </li>
                </div>
            </Link>
                { item['hasItems'] && <div onClick={toggleDrop} className=" hover:bg-blue-700 rounded-lg p-2 mr-2">
                    {isopen ?<MdArrowDownward />:<MdChevronRight />}

                </div>}
            </div>

            <div className="ml-6">
                {isopen && item['items'].map((a) => (
                    <Link key={a['title']} href={a['url']}>
                        <div className="p-2 hover:bg-blue-200 rounded flex justify-between items-center">
                            <h1 className="ml-5 flex"> {a['name']}</h1>
                            <MdChevronRight/>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

    );
}










