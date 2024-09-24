"use client"

import React, {useState} from 'react';
import {MdMenu} from "react-icons/md";
import Link from "next/link";
import {SheetSideBar} from "@/components/Sidebar";

function StoreHeader() {

    return (

        <div className="bg-gray-50 border-gray-200 lg:hidden ">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 gap-2">
               <SheetSideBar><MdMenu size={25}/></SheetSideBar>
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">

                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Store</span>
                </a>


            </div>
        </div>
    );
}


export default StoreHeader;
