'use client'
import Link from "next/link";
import {
    MdAccountBox,
    MdArrowDownward,
    MdChevronRight,
    MdDashboard,
    MdInventory, MdNote,
    MdReport,
    MdSettings
} from "react-icons/md";
import React, {useEffect, useState} from "react";


import "@/app/globals.css";

import {useParams, usePathname, useRouter} from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


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
        'hasItems': true,
        'url': "/chartofaccount",
        'items': [
            {
                'name': "Account Group",
                'url': "/chartofaccount/groups"
            }
        ]

    },
    {
        'title': "Sales",
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
                'url': "/sales/salesorder"
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
        'title': "Purchases",
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
        'url': "/report"
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
    const path = useParams();
    const pathName = usePathname();
    const router = useRouter();
    const [role, setRole] = useState(null)



    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('http://localhost:3000/api/system',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ storeid: path.storeid }),}
            )

            if(res.status === 400){
                await router.push('/stores');
            }
            if(res.status === 200){
            let {results} = await res.json();
                console.log(results, 'success');
            setRole(results['role'])
            }else {
                await router.push('/stores');
            }
        }
        fetchPosts()
    }, [])

    return (
        <nav className="bg-slate-950 hidden fixed lg:flex flex-col top-0 left-0 h-dvh w-[18rem] border-r ">

            <div className=" p-4 flex flex-row items-center bg-slate-800 ">
                {/*<MdMenu size={30}/>*/}
                <span className="text-3xl uppercase pl-4  text-white">MSK</span>
            </div>

            <ul className="p-4 mb-auto overflow-y-auto ">
                <span className="text-xs uppercase pl-4 font-semibold  text-white ">Menu</span>

                {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
                <div className="h-4"></div>
                {role === 'admin' && <div>

                    <span className="text-xs uppercase pl-4  text-white mt-4 pt-4">Configuration</span>
                    {configurationlist.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
                </div>}
            </ul>

            {/*<div className=" px-4  items-center text-white ">*/}
            {/*    <Button className="w-[13rem] items-end" onClick={handleSignout}>*/}
            {/*    <MdLogout size={24}/>*/}
            {/*    <span className=" pl-4  text-white">Log out</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}

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
            <div
                className={pathName === '/stores/' + path.storeid + item['url'] ? "  rounded bg-purple-950 flex-row flex justify-between items-center" : " hover:bg-purple-950 rounded flex flex-row justify-between items-center"}>
                <Link href={'/stores/' + path.storeid + item['url']}>
                    <div className="w-[12rem] py-3">
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
                                </div>
                            </div>
                        </li>
                    </div>
                </Link>
                {item['hasItems'] &&
                    <div onClick={toggleDrop} className=" text-white hover:bg-purple-800 rounded-lg p-2 mr-2">{isopen ?
                        <MdArrowDownward/> : <MdChevronRight/>}</div>}
            </div>

            <div className="ml-6 ">
                {isopen && item['items'].map((a) => (
                    <Link key={a['title']} href={'/stores/' + path.storeid + a['url']}>
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

export function SheetSideBar({children}) {

    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );

}









