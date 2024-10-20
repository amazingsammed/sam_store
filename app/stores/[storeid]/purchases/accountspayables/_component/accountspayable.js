import React from 'react';
import  {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {InvoiceForm} from "@/app/stores/[storeid]/sales/invoice/_component/addinvoice";
import {
    accountspayables_columns
} from "@/app/stores/[storeid]/purchases/accountspayables/_component/accountspayables_columns";

function Accountspayable(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <HeaderListTileDialog title='Accountspayable' subtitle='All Invoices are listed here' bname="Create" buttonx={
            <InvoiceForm/>
        }
                        ontap="sales/cashsales">
            <DataTable columns={accountspayables_columns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>
    );
}

export default Accountspayable;