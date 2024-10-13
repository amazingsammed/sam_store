'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Customer} from "@/app/stores/[storeid]/sales/_component/customers/customerpage";
import React from "react";
import Accountspayable from "@/app/stores/[storeid]/purchases/_components/accountspayables/accountspayable";
import Purchaseorder from "@/app/stores/[storeid]/purchases/_components/purchaseorder/purchaseorder";
import Payments from "@/app/stores/[storeid]/purchases/_components/payments/payments";
import Purchaseslist from "@/app/stores/[storeid]/purchases/_components/purchaseslist/purchaseslist";
import AllPurchases from "@/app/stores/[storeid]/purchases/_components/all_purchases/allPurchases";

export function PurchasesListPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <h1 className="text-3xl my-4 font-bold">Purchases Page</h1>
            <Tabs defaultValue='all'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All Purchases</TabsTrigger>
                        <TabsTrigger value="porder">Purchase Order</TabsTrigger>
                        <TabsTrigger value="payable">Accounts Payable</TabsTrigger>
                        <TabsTrigger value="payment">Payment</TabsTrigger>
                        <TabsTrigger value="supplier" className="hidden sm:flex">
                            Suppliers
                        </TabsTrigger>
                        {/*<TabsTrigger value="list">Purchases List</TabsTrigger>*/}
                    </TabsList>
                </div>
                <TabsContent value="all">
                    <AllPurchases/>
                </TabsContent>
                {/*<TabsContent value="list">*/}
                {/*    <Purchaseslist/>*/}
                {/*</TabsContent>*/}
                <TabsContent value="porder"><Purchaseorder/></TabsContent>
                <TabsContent value="payable">< Accountspayable/></TabsContent>
                <TabsContent value="payment">< Payments/></TabsContent>
                <TabsContent value="supplier"><Customer/></TabsContent>
            </Tabs>

        </div>

    );
}





