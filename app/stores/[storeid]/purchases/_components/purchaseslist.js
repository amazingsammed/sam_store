'use client'
import Headerlisttile from "../../../../../components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {purchasesColumns} from "@/app/stores/[storeid]/purchases/_components/purchases_columns";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Customer} from "@/app/stores/[storeid]/sales/_component/customers/customerpage";
import React from "react";
import Accountspayable from "@/app/stores/[storeid]/purchases/_components/accountspayables/accountspayable";
import Purchaseorder from "@/app/stores/[storeid]/purchases/_components/purchaseorder/purchaseorder";
import Payments from "@/app/stores/[storeid]/purchases/_components/payments/payments";

export  function PurchasesListPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <h1 className="text-3xl my-4 font-bold">Purchases Page</h1>
            <Tabs defaultValue='cashpurchases'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="cashpurchases">Cash Purchases</TabsTrigger>
                        <TabsTrigger value="porder">Purchase Order</TabsTrigger>
                        <TabsTrigger value="payable">Accounts Payable</TabsTrigger>
                        <TabsTrigger value="payment">Payment</TabsTrigger>
                        <TabsTrigger value="supplier" className="hidden sm:flex">
                            Suppliers
                        </TabsTrigger>
                        <TabsTrigger value="report" className="hidden sm:flex">
                            Report
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="cashpurchases">
            <Headerlisttile title='Purchases List' subtitle='All Purchases Vouchers are listed here' bname="Create"
                            ontap="purchases/cashpurchases">
                <DataTable columns={purchasesColumns} data={tabledata} filter={'itemname'}/>
            </Headerlisttile>
                </TabsContent>
                <TabsContent value="porder"><Purchaseorder/></TabsContent>
                <TabsContent value="payable">< Accountspayable/></TabsContent>
                <TabsContent value="payment">< Payments/></TabsContent>
                <TabsContent value="supplier"><Customer/></TabsContent>
            </Tabs>

        </div>

    );
}





