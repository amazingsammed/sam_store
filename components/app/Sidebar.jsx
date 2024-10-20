'use client'
import Link from "next/link";
import {
    MdArrowDownward, MdChevronRight, MdLogout
} from "react-icons/md";
import React, {useEffect, useState} from "react";


import "@/app/globals.css";

import {useParams, usePathname, useRouter} from "next/navigation";
import {
    Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";
import {configurationlist, theSidemenu, theSidemenu2} from "@/components/app/constant";


export default function SideBar() {
    const path = useParams();
    const pathName = usePathname();
    const router = useRouter();
    const [role, setRole] = useState(null)
    const [selectedMenu, setSelectedMenu] = useState()
    const [expanded, setExpanded] = useState(false)
    const [newx, setNewx] = useState(true)

    async function handleSignout() {
        await signOut('credential');
        router.refresh();
    }


    useEffect(() => {
        theSidemenu2.forEach(item => {
            if (pathName.includes('/stores/' + path.storeid + item['url'])) {
                if (item.hasItems) {
                    setSelectedMenu(item);
                }
            }
        })
        configurationlist.forEach(item => {
            if (pathName.includes('/stores/' + path.storeid + item['url'])) {
                if (item.hasItems) {
                    setSelectedMenu(item);
                }
            }
        })

        async function fetchPosts() {

            let res = await fetch(`http://localhost:3000/api/system`, {
                method: 'POST', headers: {
                    'Content-type': 'application/json',
                }, body: JSON.stringify({storeid: path.storeid}),
            })

            if (res.status === 400) {
                await router.push('/stores');
            }
            if (res.status === 200) {
                let {results} = await res.json();
                setRole(results.system_roles['role'])
            } else {
                await router.push('/stores');
            }
        }

        fetchPosts()
    }, [])
    if (newx) return (<div className="flex flex-row justify-between">

            <div className="flex h-full w-14 flex-col bg-slate-950">
                <nav
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                    className={`group py-2 z-10 h-full w-14 ${expanded && 'w-[13rem] shadow-xl bg-slate-950'} 
            border-r bg-dash-sidebar border-default  
            transition-width duration-200 hide-scrollbar 
            flex flex-col justify-between overflow-y-auto overflow-x-auto`}
                >
                    <ul className="relative flex flex-col justify-start gap-y-1 px-2 text-white st-current">
                        <div className="mb-7 flex w-full items-center justify-center rounded bg-slate-800 py-2">
                            MSK
                        </div>
                        {theSidemenu2.map((item, index) => (
                            <Link key={index} href={'/stores/' + path.storeid + item['url']}
                                  onClick={() => item.hasItems ? setSelectedMenu(item) : setSelectedMenu(null)}
                                  className={` text-white hover:bg-purple-900 relative h-10 w-10 ${expanded && 'w-full justify-center -space-x-2 '} ${pathName.replace('/stores/' + path.storeid,"").startsWith( item['url']) & item.url !=="" && 'bg-purple-900'} transition-all duration-200 flex items-center rounded   hover:bg-surface-200 false`}>

                    <span
                        className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded transition-colors text-foreground-lighter group-hover/item:text-foreground-light">
                    {item['icon']}
                    </span>
                                <span
                                    className={`min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-15 ${expanded && 'left-12 opacity-100'} opacity-0 false transition-all`}>
                    {item['title']}
                    </span>
                            </Link>))}
                        <hr/>
                        {configurationlist.map((item, index) => (
                            <Link key={index} href={'/stores/' + path.storeid + item['url']}
                                  onClick={() => item.hasItems ? setSelectedMenu(item) : setSelectedMenu(null)}
                                  className={` text-white hover:bg-purple-900 relative h-10 w-10 ${expanded && 'w-full justify-center -space-x-2 '} ${pathName.replace('/stores/' + path.storeid,"").startsWith( item['url']) & item.url !=="" && 'bg-purple-900'} transition-all duration-200 flex items-center rounded   hover:bg-surface-200 false`}>

                    <span
                        className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded transition-colors text-foreground-lighter group-hover/item:text-foreground-light">
                    {item['icon']}
                    </span>
                                <span
                                    className={`min-w-[128px] text-sm text-foreground-light group-hover/item:text-foreground group-aria-current/item:text-foreground absolute left-15 ${expanded && 'left-12 opacity-100'} opacity-0 false transition-all`}>
                    {item['title']}
                    </span>
                            </Link>))}
                    </ul>

                </nav>
            </div>
            {selectedMenu && (
                <div className="min-w-48">
                    <div className="flex h-full w-full flex-col border-r hide-scrollbar bg-dash-sidebar border-default">
                        <div className="flex max-h-12 items-center border-b px-6 border-default min-h-[4rem]">
                            <h4 className="text-lg font-bold">{selectedMenu.title}</h4></div>
                        <div className="flex-grow overflow-y-auto">
                            <div className="flex flex-col overflow-y-auto space-y-8">
                                <nav role="menu" aria-label="Sidebar" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <ul>
                                        {selectedMenu.items && selectedMenu.items.map((itemx, index) => (
                                            <div key={index}>
                                                <div className="my-6 space-y-8">
                                                    <div className="mx-3">
                                                        <div className="mb-2 flex px-3 font-normal space-x-3"><span
                                                            className="w-full text-sm text-foreground-lighter"><div
                                                            className="flex flex-col font-mono font-bold uppercase space-y-2"><span>{itemx.title}</span></div></span>
                                                        </div>
                                                        <div>
                                                            {itemx.items && itemx.items.map((item, index) => (
                                                                <Link href={'/stores/' + path.storeid + item.url}
                                                                      key={index}>
                                                                    <li role="menuitem"
                                                                        className={`cursor-pointer ${pathName.replace('/stores/'+path.storeid,"") === item.url && "bg-teal-200"} hover:bg-teal-200 hover:rounded flex space-x-3 items-center outline-none focus-visible:ring-1 ring-foreground-muted focus-visible:z-10 group px-3 py-1  z-10 rounded-md`}
                                                                        aria-current="page">
                                                                        {item.title}
                                                                    </li>
                                                                </Link>))}

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-px w-full bg-border-overlay"></div>
                                            </div>))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>

    );
    return (<nav className="fixed top-0 left-0 hidden flex-col border-r bg-slate-950 h-dvh w-[18rem] lg:flex">

        <div className="flex flex-row items-center bg-slate-800 p-4">
            {/*<MdMenu size={30}/>*/}
            <span className="pl-4 text-3xl uppercase text-white">MSK</span>
        </div>

        <ul className="mb-auto overflow-y-auto p-4">
            <span className="pl-4 text-xs font-semibold uppercase text-white">Menu</span>

            {theSidemenu.map((a, i) => <SideBarItemExpanded item={a} keys={i} key={i}/>)}
            <div className="h-4"></div>
            {role === 'Admin' && <div>
                <span className="mt-4 pt-4 pl-4 text-xs uppercase text-white">Configuration</span>
                {configurationlist.map((a, i) => <SideBarItemExpanded item={a} keys={i} key={i}/>)}
            </div>}
        </ul>

        <div className="flex flex-row items-center justify-between gap-4 p-4">
            <Link href={'/stores'}>
                <Button variant="outline" className="gap-2">
                    <div className="hidden lg:block">
                        Change Store
                    </div>
                </Button>
            </Link>
            <Button className="gap-2" onClick={handleSignout}>
                {<MdLogout/>}
                <div className="hidden lg:block">
                    Logout
                </div>

            </Button>
        </div>


    </nav>);

}


export function SideBarItemExpanded({item, keys}) {
    const [isopen, setidopened] = useState(false);
    const path = useParams();
    const pathName = usePathname();


    function toggleDrop() {
        item['hasItems'] && setidopened(!isopen);
    }

    return (<div className="flex flex-col py-2" key={keys}>
            <div
                className={pathName === '/stores/' + path.storeid + item['url'] ? "  rounded bg-purple-950 flex-row flex justify-between items-center" : " hover:bg-purple-950 rounded flex flex-row justify-between items-center"}>
                <Link href={'/stores/' + path.storeid + item['url']}>
                    <div className="py-3 w-[12rem]">
                        <li>
                            <div
                                className={pathName === item['url'] ? "transition-colors  pl-4 text-white   " : "btn transition-colors  pl-4 focus-visible:ring-primary-800 text-gray-700  "}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-row items-center gap-2 text-white">
                                        {item['icon']}
                                        {item['title']}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </Link>
                {item['hasItems'] &&
                    <div onClick={toggleDrop} className="mr-2 rounded-lg p-2 text-white hover:bg-purple-800">{isopen ?
                        <MdArrowDownward/> : <MdChevronRight/>}</div>}
            </div>

            <div className="ml-6">
                {isopen && item['items'].map((a, i) => (<Link key={i} href={'/stores/' + path.storeid + a['url']}>
                    <div key={i}
                         className="flex items-center justify-between rounded p-2 text-white hover:bg-purple-800">
                        <h1 className="flex"> {a['name']}</h1>
                        <MdChevronRight/>
                    </div>
                </Link>))}

            </div>
        </div>

    );
}

export function SheetSideBar({children}) {

    return (<Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="bg-slate-900 w-[400px] sm:w-[540px]">
            <SheetHeader>
                {/*<SheetTitle>*/}
                {/*    */}
                {/*</SheetTitle>*/}
                <SheetDescription>
                    <div className="flex flex-row items-center bg-slate-800 p-4">
                        {/*<MdMenu size={30}/>*/}
                        <span className="pl-4 text-3xl uppercase text-white">MSK</span>
                    </div>
                    {theSidemenu.map((a) => <SideBarItemExpandedx item={a} key={a['title']}/>)}
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>);

}

export function SideBarItemExpandedx({item,}) {
    const [isopen, setidopened] = useState(false);
    const path = useParams();
    const pathName = usePathname();


    function toggleDrop() {
        item['hasItems'] && setidopened(!isopen);
    }

    return (<div className="flex flex-col py-2">
            <div
                className={pathName === '/stores/' + path.storeid + item['url'] ? "  rounded bg-purple-950 flex-row flex justify-between items-center" : " hover:bg-purple-950 rounded flex flex-row justify-between items-center"}>
                <SheetClose>
                    <Link href={'/stores/' + path.storeid + item['url']}>
                        <div className="w-[12rem]">

                            <div>
                                <div className="flex items-center justify-between py-3 px-1.5">
                                    <div className="flex flex-row items-center gap-2 text-white">
                                        {item['icon']}
                                        {item['title']}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                </SheetClose>
                {item['hasItems'] &&
                    <div onClick={toggleDrop} className="mr-2 rounded-lg p-2 text-white hover:bg-purple-800">{isopen ?
                        <MdArrowDownward/> : <MdChevronRight/>}</div>}
            </div>

            <div className="ml-6">
                {isopen && item['items'].map((a) => (<Link key={a['title']} href={'/stores/' + path.storeid + a['url']}>
                    <div className="flex items-center justify-between rounded p-2 text-white hover:bg-purple-800">
                        <h1 className="flex"> {a['name']}</h1>
                        <MdChevronRight/>
                    </div>
                </Link>))}

            </div>
        </div>

    );
}









