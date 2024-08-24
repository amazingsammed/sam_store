"use client"

import React, {useState} from 'react';
import {MdMenu} from "react-icons/md";
import Link from "next/link";

function StoreHeader() {
    const [open,setopen]= useState();
    var header = [
        {
            'title': "Home",
            'url': "/"
        },
        {
            'title': "About",
            'url': "/about"
        },
        {
            'title': "Contact",
            'url': "/contact"
        },
        {
            'title': "Items",
            'url': "/store/items"
        },

    ];
    function handleClick(){
        console.log('hey');
        // setopen(!open);
    }

    return (

        <div className="bg-gray-50 border-gray-200 lg:hidden ">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 gap-2">
                <button type="button"  data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                        className="inline-flex items-center p-2  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">

                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Store</span>
                </a>


            </div>
        </div>
    );
}


export default StoreHeader;
