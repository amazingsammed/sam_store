

import SideBar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import {Header} from "@/components/headerlisttile";
import StoreHeader, {Drawer} from "@/app/stores/[storeid]/_component/store_header";
import {confirmStore} from "@/app/_actions/stores";
import Storeinfo from "@/components/storeinfo";




export default async function Layout({children}) {

    return (
        <div>

            <StoreHeader/>
            <SideBar/>
            <div className="lg:pl-[22rem]  ">
                <Storeinfo/>
                <div className="lg:pt-8  p-4 mx-auto">

                {children}
                </div>
            </div>
        </div>
    );
}

// max-w-4xl mx-auto p-4