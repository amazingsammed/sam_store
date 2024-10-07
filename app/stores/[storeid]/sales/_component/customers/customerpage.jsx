

'use client'

import {HeaderListTileDialog} from "@/components/headerlisttile";
import {CustomerForm} from "@/app/stores/[storeid]/sales/customer/_components/addcustomer";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {customerColumns} from "@/app/stores/[storeid]/sales/customer/_components/customer_columns";


export  function Customer(props) {
    const elements = [];
    return (
        <div className="">
            <HeaderListTileDialog title='List of Customers' subtitle='All Customers in Current Store' buttonx={
                <CustomerForm/>
            } ontap = "items/addItem">
                <DataTable columns={customerColumns} data={elements} filter={'name'}/>
            </HeaderListTileDialog>
        </div>

    );
}





