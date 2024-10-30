'use client'


import Headerlisttile, {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {allSalesColumns} from "@/app/stores/[storeid]/sales/_component/allSales_column";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import React from "react";
import {usePathname} from "next/navigation";

// export function SalesPage() {
//     return (
//         <div className="">
//             <h1 className="text-3xl my-4 font-bold">Sales Page</h1>
//             <Tabs defaultValue='allsales'>
//                 <div className="flex items-center">
//                     <TabsList>
//                         <TabsTrigger value="allsales">All Sales</TabsTrigger>
//                         <TabsTrigger value="invoice">Invoice</TabsTrigger>
//                         {/*<TabsTrigger value="receipt">Receipt</TabsTrigger>*/}
//                         <TabsTrigger value="quote">Quote</TabsTrigger>
//                         <TabsTrigger value="salesorder">Sales order</TabsTrigger>
//                         <TabsTrigger value="customers" className="hidden sm:flex">
//                             Customers
//                         </TabsTrigger>
//                         {/*<TabsTrigger value="cashsales">Sales list</TabsTrigger>*/}
//                     </TabsList>
//                 </div>
//                 <TabsContent value="allsales">
//                     <AllSales/>
//                 </TabsContent>
//                 <TabsContent value="invoice">< Invoice/></TabsContent>
//                 {/*<TabsContent value="receipt">< Accountspayable/></TabsContent>*/}
//                 <TabsContent value="quote">< Quote/></TabsContent>
//                 <TabsContent value="salesorder">< SalesOrder/></TabsContent>
//                 <TabsContent value="customers"><Customer/></TabsContent>
//                 {/*<TabsContent value="cashsales">*/}
//                 {/*    <Sales/>*/}
//                 {/*</TabsContent>*/}
//             </Tabs>
//
//         </div>
//
//     );
// }

export function SalesPage({data}) {
    const path = usePathname();
    const tabledata= data;
    return (
        <HeaderListTileDialog title='Sales List' subtitle='All Sales are listed here' buttonx={
           <div className={`flex flex-row gap-3`}>
            <Link href={path + "/creditsales"}>
            <Button variant="outline">Credit Sales</Button>
            </Link>
            <Link href={path + "/cashsales"}>
            <Button >Cash Sales</Button>
            </Link>
               </div>
}>

            <DataTable columns={allSalesColumns} data={tabledata} filter={'party_name'}/>
        </HeaderListTileDialog>
    );
}






