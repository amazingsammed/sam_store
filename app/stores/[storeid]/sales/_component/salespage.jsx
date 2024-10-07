'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";
import Sales from "@/app/stores/[storeid]/sales/_component/cashsales/sales";
import Invoice from "@/app/stores/[storeid]/sales/_component/invoice/invoice";
import Quote from "@/app/stores/[storeid]/sales/_component/quote/quote";
import SalesOrder from "@/app/stores/[storeid]/sales/_component/salesorder/salesorder";
import {Customer} from "@/app/stores/[storeid]/sales/_component/customers/customerpage";

export function SalesPage() {
    return (
        <div className="">
            <h1 className="text-3xl my-4 font-bold">Sales Page</h1>
            <Tabs defaultValue='cashsales'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="cashsales">Cash Sales</TabsTrigger>
                        <TabsTrigger value="invoice">Invoice</TabsTrigger>
                        {/*<TabsTrigger value="receipt">Receipt</TabsTrigger>*/}
                        <TabsTrigger value="quote">Quote</TabsTrigger>
                        <TabsTrigger value="salesorder">Sales order</TabsTrigger>
                        <TabsTrigger value="customers" className="hidden sm:flex">
                            Customers
                        </TabsTrigger>
                        <TabsTrigger value="report" className="hidden sm:flex">
                            Report
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="cashsales">
                    <Sales/>
                </TabsContent>
                <TabsContent value="invoice">< Invoice/></TabsContent>
                {/*<TabsContent value="receipt">< Invoice/></TabsContent>*/}
                <TabsContent value="quote">< Quote/></TabsContent>
                <TabsContent value="salesorder">< SalesOrder/></TabsContent>
                <TabsContent value="customers"><Customer/></TabsContent>
            </Tabs>

        </div>

    );
}







