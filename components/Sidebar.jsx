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
                <span className="text-xs uppercase pl-4 font-semibold text-gray-600 ">My Store</span>
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

    // return (
    //
    //     <div className=" bg-slate-800  max-w-sm h-screen fixed">
    //         <div className="bg-slate-900 text-white p-4">
    //             <MdMenu size={30} onClick={() => setExpanded(!isexpanded)}/>
    //         </div>
    //         {
    //             !isexpanded &&
    //             (<div className="p-4 bg-slate-800 text-white">
    //                 {theSidemenu.map((a) => <SideBarItemExpanded item={a} key={a['title']}/>)}
    //             </div>)
    //         }
    //
    //         {isexpanded &&
    //
    //             (<div className="p-4 bg-slate-800 text-white">
    //                 {theSidemenu.map((a) => <SideBarItemMini item={a} key={a['title']}/>)}
    //             </div>)
    //         }
    //
    //
    //
    //     </div>
    // );
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
            <Link href={item['url']}>
                <div
                    className={pathName === item['url'] ? " py-2 rounded bg-blue-700" : " py-2  hover:bg-blue-200 rounded"}>
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

// export function SideBarItemMini({ item }) {
//   const [isopen, setidopened] = useState(false);
//   const [title, showtitle] = useState(false);
//
//   function toggleDrop() {
//       item['hasItems'] && setidopened(!isopen);
//   }
//   return (
//       <div className="flex">
//
// <Link href= {item['url']}>
//
//           <div className="hover:bg-slate-700 flex p-2.5 items-center rounded-lg justify-between" onMouseLeave={()=>showtitle(false)} onClick={toggleDrop} onMouseEnter={()=>showtitle(true)} >
//               <div className="flex justify-between items-center ">
//                   {item['icon']}
//                  {title && <h1  className="pl-5 rounded bg-black fixed"> {item['title']}</h1>}
//               </div>
//           </div>
// </Link>
//           <div className="fixed bg-black w-300 rounded">
//               {isopen && item['items'].map((a) => (
//                   <Link key={a['title']} href={a['url']}>
//                       <div className="p-2 hover:bg-slate-700 rounded-lg flex justify-between">
//                           <h1 className="ml-5 flex"> {a['name']}</h1>
//                           <MdChevronRight />
//                       </div>
//                   </Link>
//               ))}
//
//           </div>
//       </div>
//
//   );
// }
//
// export function SideBarItemExpanded({ item }) {
//     const [isopen, setidopened] = useState(false);
//
//     function toggleDrop() {
//         item['hasItems'] && setidopened(!isopen);
//     }
//     return (
//         <div>
//
//             <Link href= {item['url']}>
//
//                 <div className="hover:bg-slate-700 flex p-2.5 items-center rounded-lg justify-between" onClick={toggleDrop}>
//                     <div className="flex justify-between items-center ">
//                         {item['icon']}
//                         <h1  className="ml-3"> {item['title']}</h1>
//
//                     </div>
//                     {/* {isopen ? <MdArrowDownward /> : <MdChevronRight />} */}
//                 </div>
//             </Link>
//             <div className="ml-6">
//                 {isopen && item['items'].map((a) => (
//                     <Link key={a['title']}href={a['url']}>
//                         <div className="p-2 hover:bg-slate-700 rounded-lg flex justify-between">
//                             <h1 className="ml-5 flex"> {a['name']}</h1>
//                             <MdChevronRight />
//                         </div>
//                     </Link>
//                 ))}
//
//             </div>
//         </div>
//
//     );
// }









