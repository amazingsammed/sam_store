

import SideBar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import {Header} from "@/components/headerlisttile";
import StoreHeader, {Drawer} from "@/app/store/_component/store_header";
import HomeNav from "@/app/(home)/_component/home_navbar";



export default function Layout({ children }) {
  return (
          <div >{children}</div>
  );
}

// max-w-4xl mx-auto p-4