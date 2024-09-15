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
    MdSettings, MdShare
} from "react-icons/md";
import React, {useState} from "react";


import "@/app/globals.css";

import {useParams, usePathname} from "next/navigation";
import {IoMdCash} from "react-icons/io";


const size = 24;

const theSidemenu = [
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
        'url': "/dashboard"
    },
    {
        'title': "Chart of Accounts",
        'icon': <MdAccountBox size={size}/>,
        'hasItems': false,
        'url': "/chartofaccount",

    },
    {
        'title': "Cash Sales",
        'icon': <MdNote size={size}/>,
        'hasItems': true,
        'url': "/sales",
        'items': [
            {
                'name': "Quote",
                'url': "/sales/quote"
            },
            {
                'name': "Sales Order",
                'url': "/sales/order"
            },
            {
                'name': "Invoice",
                'url': "/sales/invoice"
            },
            {
                'name': "Refund",
                'url': "/sales/refund"
            },
            {
                'name': "Customers",
                'url': "/sales/customer"
            },
        ]
    },
    {
        'title': "Cash Purchases",
        'icon': <MdReport size={size}/>,
        'hasItems': true,
        'url': "/purchases",
        'items': [
            {
                'name': "Purchases order",
                'url': "/purchases/purchaseorder"
            },
            {
                'name': "Accounts Payables",
                'url': "/purchases/accountspayables"
            },
            {
                'name': "Payments",
                'url': "/purchases/payments"
            },
            {
                'name': "Suppliers",
                'url': "/purchases/suppliers"
            },
        ]
    },
    {
        'title': "Items",
        'icon': <MdInventory size={size}/>,
        'hasItems': true,
        'url': "/items",
        'items': [
            {
                'name': "Category",
                'url': "/items/category"
            },
            {
                'name': "Groups",
                'url': "/items/group"
            },
            {
                'name': "Units",
                'url': "/items/units"
            },
        ]
    },
    // ,
    {
        'title': "Reports",
        'icon': <MdReport size={size}/>,
        'hasItems': false,
        'url': "/reports"
    },


    {
        'title': "Voucher",
        'icon': <MdNote size={size}/>,
        'hasItems': true,
        'url': '/voucher',
        'items': [
            {'name': "Sales", 'url': '/voucher/sales'},
            {'name': "Purchases", 'url': '/voucher/purchases'},
            {'name': "Receipt", 'url': '/voucher/receipt'}]
    }
];
const configurationlist = [

    {
        'title': "Settings",
        'icon': <MdSettings size={size}/>,
        'hasItems': false,
        'url': "/settings"
    }
];

export default function SideBar() {


    return (
        <nav className="bg-slate-950 hidden fixed lg:flex flex-col top-0 left-0 h-dvh w-[18rem] border-r ">

            <div className=" p-4 flex flex-row items-center bg-slate-800 ">
                {/*<MdMenu size={30}/>*/}
                <span className="text-3xl uppercase pl-4  text-white">My Store</span>
            </div>

            <ul className="p-4 mb-auto overflow-y-auto ">
                <span className="text-xs uppercase pl-4 font-semibold  text-white ">Menu</span>

                {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
                <div className="h-4"></div>
                <span className="text-xs uppercase pl-4  text-white mt-4 pt-4">Configuration</span>
                {configurationlist.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
            </ul>

            {/*<div className=" p-4 border-b flex flex-row items-center  text-white">*/}
            {/*    <MdMenu size={30}/>*/}

            {/*</div>*/}


        </nav>
    );

}


export function SideBarItemExpanded({item,}) {
    const [isopen, setidopened] = useState(false);
    const path = useParams();
    const pathName = usePathname();

    function toggleDrop() {
        item['hasItems'] && setidopened(!isopen);
    }

    return (
        <div className="flex flex-col py-2">
            <div className={pathName === '/stores/'+path.storeid+item['url'] ? " py-2 rounded bg-purple-950 flex-row flex justify-between items-center" : "py-2 hover:bg-purple-950 rounded flex flex-row justify-between items-center"}>
            <Link href={'/stores/'+path.storeid+item['url']}>
                <div className="w-[12rem]">
                    <li>
                        <div
                            className={pathName === item['url'] ? "transition-colors  pl-4 text-white   " :
                                "btn transition-colors  pl-4 focus-visible:ring-primary-800 text-gray-700  "
                            }
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex-row items-center flex gap-2  text-white">
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
                { item['hasItems'] && <div onClick={toggleDrop} className=" text-white hover:bg-purple-800 rounded-lg p-2 mr-2">
                    {isopen ?<MdArrowDownward />:<MdChevronRight />}

                </div>}
            </div>

            <div className="ml-6 ">
                {isopen && item['items'].map((a) => (
                    <Link key={a['title']} href={'/stores/'+path.storeid+a['url']}>
                        <div className="p-2 hover:bg-purple-800 rounded flex justify-between items-center text-white">
                            <h1 className=" flex"> {a['name']}</h1>
                            <MdChevronRight/>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

    );
}










