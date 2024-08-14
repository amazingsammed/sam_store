"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function HomeNav(){
  const [open,setopen]= useState(false);
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
    
];
  function handleClick(){
    console.log('hey');
    setopen(!open);
  }
    return (

        <nav className="bg-blue border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
      
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Store</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              
              {header.map((a) => <li key={a['title']} className='dark:text-black'>
                <Link href={a['url']} className="hover:text-blue-90 font-bold">{a['title']}</Link>
              </li>)}
             
            </ul>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              <button type="button" onClick = {handleClick} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          {open && (
          <div className="items-center justify-between  w-full md:hidden md:w-auto md:order-1" >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:bg-black dark:border-gray-700">
            {header.map((a) => <li key={a['title']}>
                <Link href={a['url']} className="block py-2 px-3 hover:bg-gray-100 ">{a['title']}</Link>
              </li>)}
                  
            </ul>
          </div>
          )}
          </div>
        </nav>
        );
}